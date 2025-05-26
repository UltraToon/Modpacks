advancement grant @a[distance=..20] only modpack:cutscenes/wither
summon minecraft:marker ~ ~ ~ {Tags:["returnPoint"]}
gamemode spectator @s
spectate @e[type=#wither_spawn_animation:altar_general,limit=1]

cam interpolation circular
cam add ~5 ~2 ~0
cam add ~0 ~2 ~5
cam add ~-5 ~2 ~0
cam add ~0 ~2 ~-5
tp @s @e[type=minecraft:marker,tag=returnPoint,sort=nearest,limit=1]
gamemode survival @s
cam target entity @e[type=#wither_spawn_animation:altar_general,limit=1]
cam save wither
cam-server start wither @a[distance=..20] 5s
cam-server remove wither
