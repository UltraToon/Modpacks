declare module "packages/traben/entity_texture_features/utils/$EntityIntLRU" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Object2IntLinkedOpenHashMap, $Object2IntLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2IntLinkedOpenHashMap"

export class $EntityIntLRU extends $Object2IntLinkedOpenHashMap<($UUID)> {

constructor(capacity: integer)
constructor()

public "put"(uuid: $UUID$Type, v: integer): integer
public "getInt"(k: any): integer
public "defaultReturnValue"(arg0: integer): void
public "defaultReturnValue"(): integer
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
public static "identity"<T>(): $Function<(T), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityIntLRU$Type = ($EntityIntLRU);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityIntLRU_ = $EntityIntLRU$Type;
}}
declare module "packages/traben/entity_texture_features/features/texture_handlers/$ETFTexture$TextureReturnState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ETFTexture$TextureReturnState extends $Enum<($ETFTexture$TextureReturnState)> {
static readonly "NORMAL": $ETFTexture$TextureReturnState
static readonly "NORMAL_PATCHED": $ETFTexture$TextureReturnState
static readonly "BLINK": $ETFTexture$TextureReturnState
static readonly "BLINK_PATCHED": $ETFTexture$TextureReturnState
static readonly "BLINK2": $ETFTexture$TextureReturnState
static readonly "BLINK2_PATCHED": $ETFTexture$TextureReturnState
static readonly "APPLY_PATCH": $ETFTexture$TextureReturnState
static readonly "APPLY_BLINK": $ETFTexture$TextureReturnState
static readonly "APPLY_BLINK2": $ETFTexture$TextureReturnState


public "toString"(): string
public static "values"(): ($ETFTexture$TextureReturnState)[]
public static "valueOf"(name: string): $ETFTexture$TextureReturnState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFTexture$TextureReturnState$Type = (("normal") | ("normal_patched") | ("blink_patched") | ("apply_blink") | ("blink2") | ("apply_patch") | ("blink") | ("apply_blink2") | ("blink2_patched")) | ($ETFTexture$TextureReturnState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFTexture$TextureReturnState_ = $ETFTexture$TextureReturnState$Type;
}}
declare module "packages/traben/entity_texture_features/utils/$ETFEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Team, $Team$Type} from "packages/net/minecraft/world/scores/$Team"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ETFEntity {

 "etf$getItemsEquipped"(): $Iterable<($ItemStack)>
 "etf$getScoreboardTeam"(): $Team
 "etf$canBeBright"(): boolean
 "etf$getBlockY"(): integer
 "etf$getType"(): $EntityType<(any)>
 "etf$isBlockEntity"(): boolean
 "etf$getCustomName"(): $Component
 "etf$getHandItems"(): $Iterable<($ItemStack)>
 "etf$getNbt"(): $CompoundTag
 "etf$getArmorItems"(): $Iterable<($ItemStack)>
 "etf$getOptifineId"(): integer
 "etf$distanceTo"(arg0: $Entity$Type): float
 "etf$getUuid"(): $UUID
 "etf$hasCustomName"(): boolean
/**
 * 
 * @deprecated
 */
 "etf$getPose"(): $Pose
 "etf$getVelocity"(): $Vec3
 "etf$getEntityKey"(): string
 "etf$getBlockPos"(): $BlockPos
 "etf$getWorld"(): $Level
}

export namespace $ETFEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFEntity$Type = ($ETFEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFEntity_ = $ETFEntity$Type;
}}
declare module "packages/traben/entity_texture_features/$ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction" {
import {$ETFEntity, $ETFEntity$Type} from "packages/traben/entity_texture_features/utils/$ETFEntity"

export interface $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction {

 "toInt"(arg0: $ETFEntity$Type): integer

(arg0: $ETFEntity$Type): integer
}

export namespace $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$Type = ($ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction_ = $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$Type;
}}
declare module "packages/traben/entity_texture_features/features/player/$ETFPlayerEntity" {
import {$PlayerModelPart, $PlayerModelPart$Type} from "packages/net/minecraft/world/entity/player/$PlayerModelPart"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ETFEntity, $ETFEntity$Type} from "packages/traben/entity_texture_features/utils/$ETFEntity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Team, $Team$Type} from "packages/net/minecraft/world/scores/$Team"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ETFPlayerEntity extends $ETFEntity {

 "etf$isTeammate"(arg0: $Player$Type): boolean
 "etf$getEntity"(): $Entity
 "etf$getName"(): $Component
 "etf$getInventory"(): $Inventory
 "etf$isPartVisible"(arg0: $PlayerModelPart$Type): boolean
 "etf$getUuidAsString"(): string
 "etf$getItemsEquipped"(): $Iterable<($ItemStack)>
 "etf$getScoreboardTeam"(): $Team
 "etf$canBeBright"(): boolean
 "etf$getBlockY"(): integer
 "etf$getType"(): $EntityType<(any)>
 "etf$isBlockEntity"(): boolean
 "etf$getCustomName"(): $Component
 "etf$getHandItems"(): $Iterable<($ItemStack)>
 "etf$getNbt"(): $CompoundTag
 "etf$getArmorItems"(): $Iterable<($ItemStack)>
 "etf$getOptifineId"(): integer
 "etf$distanceTo"(arg0: $Entity$Type): float
 "etf$getUuid"(): $UUID
 "etf$hasCustomName"(): boolean
/**
 * 
 * @deprecated
 */
 "etf$getPose"(): $Pose
 "etf$getVelocity"(): $Vec3
 "etf$getEntityKey"(): string
 "etf$getBlockPos"(): $BlockPos
 "etf$getWorld"(): $Level
}

export namespace $ETFPlayerEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFPlayerEntity$Type = ($ETFPlayerEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFPlayerEntity_ = $ETFPlayerEntity$Type;
}}
declare module "packages/traben/entity_texture_features/features/texture_handlers/$ETFSprite" {
import {$ETFTexture, $ETFTexture$Type} from "packages/traben/entity_texture_features/features/texture_handlers/$ETFTexture"
import {$Resource, $Resource$Type} from "packages/net/minecraft/server/packs/resources/$Resource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SpriteContents, $SpriteContents$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $ETFSprite {
readonly "isETFAltered": boolean

constructor(originalSprite: $TextureAtlasSprite$Type, etfTexture: $ETFTexture$Type, isNotVariant: boolean)

public static "load"(id: $ResourceLocation$Type, resource: $Resource$Type): $SpriteContents
public "getSpriteVariant"(): $TextureAtlasSprite
public "getEmissive"(): $TextureAtlasSprite
public "isEmissive"(): boolean
get "spriteVariant"(): $TextureAtlasSprite
get "emissive"(): $TextureAtlasSprite
get "emissive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFSprite$Type = ($ETFSprite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFSprite_ = $ETFSprite$Type;
}}
declare module "packages/traben/entity_texture_features/features/texture_handlers/$ETFTexture" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$ETFEntity, $ETFEntity$Type} from "packages/traben/entity_texture_features/utils/$ETFEntity"
import {$ETFSprite, $ETFSprite$Type} from "packages/traben/entity_texture_features/features/texture_handlers/$ETFSprite"
import {$ETFConfig$EmissiveRenderModes, $ETFConfig$EmissiveRenderModes$Type} from "packages/traben/entity_texture_features/config/$ETFConfig$EmissiveRenderModes"
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$ETFTexture$TextureReturnState, $ETFTexture$TextureReturnState$Type} from "packages/traben/entity_texture_features/features/texture_handlers/$ETFTexture$TextureReturnState"
import {$Model, $Model$Type} from "packages/net/minecraft/client/model/$Model"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $ETFTexture {
static readonly "PATCH_NAMESPACE_PREFIX": string
readonly "thisIdentifier": $ResourceLocation
 "currentTextureState": $ETFTexture$TextureReturnState
 "eSuffix": string

constructor(variantIdentifier: $ResourceLocation$Type)

public "toString"(): string
public "exists"(): boolean
public static "patchTextureToRemoveZFightingWithOtherTexture"(baseImage: $NativeImage$Type, otherImage: $NativeImage$Type): void
public "getTextureIdentifier"(entity: $ETFEntity$Type): $ResourceLocation
public static "ofUnmodifiable"(identifier: $ResourceLocation$Type, emissiveIdentifier: $ResourceLocation$Type): $ETFTexture
public "getPaintingSprite"(originalSprite: $TextureAtlasSprite$Type, originalID: $ResourceLocation$Type): $ETFSprite
public "getEmissiveIdentifierOfCurrentState"(): $ResourceLocation
public static "manual"(modifiedSkinIdentifier: $ResourceLocation$Type, emissiveIdentifier: $ResourceLocation$Type, enchantIdentifier: $ResourceLocation$Type): $ETFTexture
public static "manual"(modifiedSkinIdentifier: $ResourceLocation$Type, blinkIdentifier: $ResourceLocation$Type, blink2Identifier: $ResourceLocation$Type, emissiveIdentifier: $ResourceLocation$Type, blinkEmissiveIdentifier: $ResourceLocation$Type, blink2EmissiveIdentifier: $ResourceLocation$Type, enchantIdentifier: $ResourceLocation$Type, blinkenchantIdentifier: $ResourceLocation$Type, blink2enchantIdentifier: $ResourceLocation$Type, patchIdentifier: $ResourceLocation$Type, blinkpatchIdentifier: $ResourceLocation$Type, blink2patchIdentifier: $ResourceLocation$Type): $ETFTexture
public "assertPatchedTextures"(): void
public "isEnchanted"(): boolean
public "isEmissive"(): boolean
public "getEnchantIdentifierOfCurrentState"(): $ResourceLocation
public "getEmissiveVertexConsumer"(vertexConsumerProvider: $MultiBufferSource$Type, model: $Model$Type, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes$Type): $VertexConsumer
public "renderEmissive"(matrixStack: $PoseStack$Type, vertexConsumerProvider: $MultiBufferSource$Type, model: $Model$Type): void
public "renderEmissive"(matrixStack: $PoseStack$Type, vertexConsumerProvider: $MultiBufferSource$Type, model: $Model$Type, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes$Type): void
public "renderEmissive"(matrixStack: $PoseStack$Type, vertexConsumerProvider: $MultiBufferSource$Type, modelPart: $ModelPart$Type): void
public "renderEmissive"(matrixStack: $PoseStack$Type, vertexConsumerProvider: $MultiBufferSource$Type, modelPart: $ModelPart$Type, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes$Type): void
public "setGUIBlink"(): void
public "doesBlink"(): boolean
public "doesBlink2"(): boolean
public "canPatch"(): boolean
get "emissiveIdentifierOfCurrentState"(): $ResourceLocation
get "enchanted"(): boolean
get "emissive"(): boolean
get "enchantIdentifierOfCurrentState"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFTexture$Type = ($ETFTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFTexture_ = $ETFTexture$Type;
}}
declare module "packages/traben/entity_texture_features/utils/$ETFVertexConsumer" {
import {$ETFTexture, $ETFTexture$Type} from "packages/traben/entity_texture_features/features/texture_handlers/$ETFTexture"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $ETFVertexConsumer {

 "etf$getETFTexture"(): $ETFTexture
 "etf$getProvider"(): $MultiBufferSource
 "etf$getRenderLayer"(): $RenderType
 "etf$initETFVertexConsumer"(arg0: $MultiBufferSource$Type, arg1: $RenderType$Type): void
}

export namespace $ETFVertexConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFVertexConsumer$Type = ($ETFVertexConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFVertexConsumer_ = $ETFVertexConsumer$Type;
}}
declare module "packages/traben/entity_texture_features/$ETFApi$ETFVariantSuffixProvider" {
import {$ETFEntity, $ETFEntity$Type} from "packages/traben/entity_texture_features/utils/$ETFEntity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction, $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$Type} from "packages/traben/entity_texture_features/$ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction"
import {$IntOpenHashSet, $IntOpenHashSet$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntOpenHashSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ETFApi$ETFVariantSuffixProvider {

 "size"(): integer
 "getSuffixForETFEntity"(arg0: $ETFEntity$Type): integer
 "entityCanUpdate"(arg0: $UUID$Type): boolean
 "getAllSuffixes"(): $IntOpenHashSet
 "getSuffixForBlockEntity"(entityToBeTested: $BlockEntity$Type): integer
 "getSuffixForEntity"(entityToBeTested: $Entity$Type): integer
 "setRandomSupplier"(arg0: $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$Type): void
}

export namespace $ETFApi$ETFVariantSuffixProvider {
function getVariantProviderOrNull(propertiesFileIdentifier: $ResourceLocation$Type, vanillaIdentifier: $ResourceLocation$Type, ...suffixKeyName: (string)[]): $ETFApi$ETFVariantSuffixProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFApi$ETFVariantSuffixProvider$Type = ($ETFApi$ETFVariantSuffixProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFApi$ETFVariantSuffixProvider_ = $ETFApi$ETFVariantSuffixProvider$Type;
}}
declare module "packages/traben/entity_texture_features/utils/$ETFRenderLayerWithTexture" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ETFRenderLayerWithTexture {

 "etf$getId"(): $Optional<($ResourceLocation)>

(): $Optional<($ResourceLocation)>
}

export namespace $ETFRenderLayerWithTexture {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFRenderLayerWithTexture$Type = ($ETFRenderLayerWithTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFRenderLayerWithTexture_ = $ETFRenderLayerWithTexture$Type;
}}
declare module "packages/traben/entity_texture_features/config/$ETFConfig$EmissiveRenderModes" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ETFConfig$EmissiveRenderModes extends $Enum<($ETFConfig$EmissiveRenderModes)> {
static readonly "DULL": $ETFConfig$EmissiveRenderModes
static readonly "BRIGHT": $ETFConfig$EmissiveRenderModes


public "toString"(): string
public static "values"(): ($ETFConfig$EmissiveRenderModes)[]
public static "valueOf"(name: string): $ETFConfig$EmissiveRenderModes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFConfig$EmissiveRenderModes$Type = (("bright") | ("dull")) | ($ETFConfig$EmissiveRenderModes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFConfig$EmissiveRenderModes_ = $ETFConfig$EmissiveRenderModes$Type;
}}
declare module "packages/traben/entity_texture_features/mixin/accessor/$TooltipAccessor" {
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $TooltipAccessor {

 "setCachedTooltip"(arg0: $List$Type<($FormattedCharSequence$Type)>): void

(arg0: $List$Type<($FormattedCharSequence$Type)>): void
}

export namespace $TooltipAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipAccessor$Type = ($TooltipAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipAccessor_ = $TooltipAccessor$Type;
}}
