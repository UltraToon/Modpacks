function runCutscene(sequence) {
  let sceneIndex = 0;
  function stopCutscene() {
    [
      "cam stop",
      "cam clear",
      "cam follow none",
      "cam target none",
      "cam smooth_start true",
    ].forEach((cmd) => Client.runCommand(cmd));
    Client.gui.chat.clearMessages(true);
  }
  function runNextScene() {
    let scene = sequence[sceneIndex++];
    let cutsceneCheck = Client.scheduleRepeatingInTicks(1, () => {
      console.log("Im still active!");
      if (Client.isKeyDown(88) || !scene.entity.isAlive()) {
        stopCutscene();
        Client.statusMessage = Text.yellow("(X) Cutscene canceled");
      }
    });
    [
      "cam mode outside",
      `cam interpolation ${scene.interpolation || "hermite"}`,
      "cam clear",
      `cam follow entity ${scene.entity.uuid.toString()}`,
      `cam target entity ${scene.entity.uuid.toString()}`,
    ].forEach((cmd) => Client.runCommand(cmd));
    scene.offsets.forEach(([x, y, z, yaw, pitch, roll, zoom]) => {
      Client.runCommand(
        //prettier-ignore
        `cam add ${x} ${y} ${z} ${yaw ?? ""} ${pitch ?? ""} ${roll ?? ""} ${zoom ?? ""}`.trim()
      );
    });
    Client.runCommand(`cam start ${scene.duration || 5}s`);
    if (scene.effects) {
      scene.effects.forEach((effect) => {
        Client.scheduleInTicks((scene.duration || 5) * effect.at * 20, () => {
          if (!cutsceneCheck) return;
          switch (effect.type) {
            case "sound":
              Client.level.playLocalSound(
                scene.entity.x,
                scene.entity.y,
                scene.entity.z,
                effect.sound,
                "master",
                effect.volume || 1,
                effect.pitch || 1,
                false
              );
              break;
          }
        });
      });
    }
    Client.scheduleInTicks((scene.duration || 5) * 20, () => {
      if (sceneIndex < sequence.length) {
        Client.runCommand("cam smooth_start false"); // between times
        runNextScene();
      } else {
        stopCutscene();
      }
    });
  }
  runNextScene();
}

EntityEvents.spawned("minecraft:iron_golem", (event) => {
  const { entity } = event;
  if (entity.distanceToEntity(Client.player) > 15) {
    return;
  }
  Client.scheduleInTicks(1, () => {
    runCutscene([
      {
        duration: 5,
        entity: entity,
        offsets: [
          // if having yaw, must have pitch
          [0, 2, 0], // Basic: x, y, z
          [2, 2, 2, 45, 0], // With yaw
          [4, 3, 1, 90, -20], // With yaw and pitch
          [1, 4, -2, 180, 10, 15], // With yaw, pitch, roll
          [0, 5, 0, 270, 0, 0, 150], // Full: x, y, z, yaw, pitch, roll, zoom (FOV)
        ],
        effects: [
          { type: "sound", sound: "minecraft:entity.wither.spawn", at: 0.5 }, // At 0% (start)
          //{ type: "screen_shake", intensity: 0.5, at: 0.3 }, // At 30%
          //{ type: "title", text: "BOSS AWAKENS", at: 0.8 }, // At 80%
        ],
      },
      {
        duration: 5,
        entity: entity,
        offsets: [
          [-10, 2, 0, 90, 0],
          [-5, 3, 2, 45, -5],
          [0, 4, 3, 0, -10],
          [5, 3, 2, -45, -5],
          [10, 2, 0, -90, 0],
        ],
      },
    ]);
  });
});

EntityEvents.spawned("minecraft:wither", (event) => {
  const { entity } = event;
  if (entity.distanceToEntity(Client.player) > 15) {
    return;
  }
  Client.scheduleInTicks(1, () => {
    runCutscene([
      {
        duration: 3,
        entity: entity,
        interpolation: "hermite",
        offsets: [
          [0, 1, 5],
          [-2, 2, 3, 45, -10],
        ],
        effects: [
          {
            type: "sound",
            sound: "minecraft:ambient.cave",
            at: 0.0,
            volume: 2,
          },
        ],
      },
      {
        duration: 4,
        entity: entity,
        interpolation: "linear",
        offsets: [
          [3, 3, -2, 135, 15],
          [0, 4, 0, 180, -5, 0, 120],
        ],
        effects: [
          { type: "sound", sound: "minecraft:entity.wither.spawn", at: 0.5 },
        ],
      },
    ]);
  });
});
// ClientEvents.loggedIn((event) => {
//   const { entity } = event;
//   let pData = event.player.persistentData;
//   if (!pData.firstJoin) {
//     pData.firstJoin = true;
//     runCutscene({
//       duration: 13,
//       entity: entity,
//       offsets: CUTSCENE_PRESETS.SIMPLE,
//     });
//   }
// });
//const CUTSCENE_PRESETS = {
//   ORBIT: {
//     offsets: [
//       [0, 2, 0],
//       [2, 2, 2, 45, 0],
//       [4, 3, 1, 90, -20],
//       [1, 4, -2, 180, 10, 15],
//       [0, 5, 0, 270, 0, 0, 150],
//     ],
//   },
//   DRAMATIC: {
//     offsets: [
//       [0, 1, 5],
//       [-3, 2, 3, 45, -10],
//       [3, 3, -2, 135, 15],
//       [0, 4, 0, 180, -5, 0, 120],
//     ],
//   },
//   SIMPLE: {
//     offsets: [
//       [0, 2, 3],
//       [2, 2, 0, 90, 0],
//       [0, 2, -3, 180, 0],
//     ],
//   },
//   BOSS_INTRO: {
//     offsets: [
//       [0, 1, 8],
//       [-5, 3, 5, 45, -15],
//       [5, 2, 5, 135, -10],
//       [0, 6, 0, 180, -30, 0, 120],
//       [0, 1, 3, 0, 0],
//     ],
//   },
//   FLYBY: {
//     offsets: [
//       [-10, 2, 0, 90, 0],
//       [-5, 3, 2, 45, -5],
//       [0, 4, 3, 0, -10],
//       [5, 3, 2, -45, -5],
//       [10, 2, 0, -90, 0],
//     ],
//   },
// };

// // Enhanced effect presets
// const EFFECT_PRESETS = {
//   BOSS_SPAWN: [
//     {
//       type: "sound",
//       sound: "minecraft:entity.wither.spawn",
//       at: 0,
//       volume: 1.5,
//     },
//     { type: "screen_shake", intensity: 0.8, duration: 1, at: 0.1 },
//     {
//       type: "particle",
//       particle: "minecraft:explosion",
//       count: 20,
//       spread: 2,
//       at: 0.2,
//     },
//     {
//       type: "title",
//       text: "BOSS AWAKENS",
//       fadeIn: 5,
//       stay: 40,
//       fadeOut: 15,
//       at: 0.3,
//     },
//   ],
//   DRAMATIC_ENTRY: [
//     {
//       type: "sound",
//       sound: "minecraft:entity.lightning_bolt.thunder",
//       at: 0,
//       volume: 0.8,
//     },
//     {
//       type: "particle",
//       particle: "minecraft:smoke",
//       count: 15,
//       spread: 1.5,
//       at: 0.1,
//     },
//     { type: "actionbar", text: "Something approaches...", at: 0.5 },
//   ],
//   VICTORY: [
//     {
//       type: "sound",
//       sound: "minecraft:ui.toast.challenge_complete",
//       at: 0,
//       volume: 1.2,
//     },
//     {
//       type: "particle",
//       particle: "minecraft:firework",
//       count: 30,
//       spread: 3,
//       at: 0.2,
//     },
//     {
//       type: "title",
//       text: "VICTORY!",
//       subtitle: "The threat is vanquished",
//       at: 0.3,
//     },
//   ],
// };
