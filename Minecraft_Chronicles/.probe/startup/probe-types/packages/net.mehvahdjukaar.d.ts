declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/$IPartyCreeper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPartyCreeper {

 "supplementaries$isFestive"(): boolean
 "supplementaries$setFestive"(arg0: boolean): void
}

export namespace $IPartyCreeper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyCreeper$Type = ($IPartyCreeper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartyCreeper_ = $IPartyCreeper$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractPresentBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IColored, $IColored$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IColored"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractPresentBlock extends $WaterBlock implements $EntityBlock, $IColored {
static readonly "SHAPE_LID": $VoxelShape
static readonly "SHAPE_OPEN": $VoxelShape
static readonly "SHAPE_CLOSED": $VoxelShape
static readonly "PACKED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation


public "tick"(state: $BlockState$Type, serverLevel: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): integer
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "canBeReplaced"(state: $BlockState$Type, fluid: $Fluid$Type): boolean
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getColor"(): $DyeColor
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
/**
 * 
 * @deprecated
 */
public "changeItemColor"(color: $DyeColor$Type): $Item
public "supportsBlankColor"(): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPresentBlock$Type = ($AbstractPresentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPresentBlock_ = $AbstractPresentBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$RopeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RopeItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "place"(context: $BlockPlaceContext$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RopeItem$Type = ($RopeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RopeItem_ = $RopeItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/events/$SimpleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SimpleEvent {

}

export namespace $SimpleEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleEvent$Type = ($SimpleEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleEvent_ = $SimpleEvent$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$RopeBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$AbstractRopeBlock, $AbstractRopeBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractRopeBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RopeBlock extends $AbstractRopeBlock {
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "FACING_TO_PROPERTY_MAP": $Map<($Direction), ($BooleanProperty)>
static readonly "COLLISION_SHAPE": $VoxelShape
static readonly "KNOT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "hasConnection"(dir: $Direction$Type, state: $BlockState$Type): boolean
public "setConnection"(dir: $Direction$Type, state: $BlockState$Type, value: boolean): $BlockState
public static "isSupportingCeiling"(upState: $BlockState$Type, pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "isSupportingCeiling"(pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "canConnectDown"(downState: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RopeBlock$Type = ($RopeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RopeBlock_ = $RopeBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BookPileHorizontalBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BookPileBlock, $BookPileBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BookPileBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BookPileHorizontalBlock extends $BookPileBlock {
static readonly "FACING": $DirectionProperty
static readonly "BOOKS": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPileHorizontalBlock$Type = ($BookPileHorizontalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookPileHorizontalBlock_ = $BookPileHorizontalBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData$Builder" {
import {$ExtraModelData, $ExtraModelData$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData"
import {$ModelDataKey, $ModelDataKey$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ModelDataKey"

export interface $ExtraModelData$Builder {

 "build"(): $ExtraModelData
 "with"<A>(arg0: $ModelDataKey$Type<(A)>, arg1: A): $ExtraModelData$Builder
}

export namespace $ExtraModelData$Builder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraModelData$Builder$Type = ($ExtraModelData$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraModelData$Builder_ = $ExtraModelData$Builder$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$AltimeterItem" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AltimeterItem extends $Item implements $ICustomItemRendererProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AltimeterItem$Type = ($AltimeterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AltimeterItem_ = $AltimeterItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$IOnePlayerInteractable" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

/**
 * 
 * @deprecated
 */
export interface $IOnePlayerInteractable {

 "getPlayerWhoMayEdit"(): $UUID
 "isOtherPlayerEditing"(player: $Player$Type): boolean
 "tryOpeningEditGui"(player: $ServerPlayer$Type, pos: $BlockPos$Type, stack: $ItemStack$Type): boolean
 "isEditingPlayer"(player: $Player$Type): boolean
 "setPlayerWhoMayEdit"(arg0: $UUID$Type): void
}

export namespace $IOnePlayerInteractable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOnePlayerInteractable$Type = ($IOnePlayerInteractable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOnePlayerInteractable_ = $IOnePlayerInteractable$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$CannonBallBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $CannonBallBlock extends $WaterBlock {
static readonly "BALLS": $IntegerProperty
static readonly "SHAPE_1": $VoxelShape
static readonly "SHAPE_2": $VoxelShape
static readonly "SHAPE_3": $VoxelShape
static readonly "SHAPE_4": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getShadeBrightness"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "canBeReplaced"(state: $BlockState$Type, useContext: $BlockPlaceContext$Type): boolean
public "propagatesSkylightDown"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonBallBlock$Type = ($CannonBallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonBallBlock_ = $CannonBallBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$IFrameBlock" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IFrameBlock {

 "getFilledBlock"(arg0: $Block$Type): $Block

(arg0: $Block$Type): $Block
}

export namespace $IFrameBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFrameBlock$Type = ($IFrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFrameBlock_ = $IFrameBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$GravelBricksBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GravelBricksBlock extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
public "fallOn"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, fallDistance: float): void
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravelBricksBlock$Type = ($GravelBricksBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GravelBricksBlock_ = $GravelBricksBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$CandleHolderBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$LightUpWaterBlock, $LightUpWaterBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LightUpWaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IColored, $IColored$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IColored"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $CandleHolderBlock extends $LightUpWaterBlock implements $IColored {
static readonly "FACING": $DirectionProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
static readonly "CANDLES": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(color: $DyeColor$Type, properties: $BlockBehaviour$Properties$Type)
constructor(color: $DyeColor$Type, properties: $BlockBehaviour$Properties$Type, particle: $Supplier$Type<($ParticleType$Type<(any)>)>)

public static "isSideSolidForDirection"(reader: $LevelReader$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "canBeReplaced"(state: $BlockState$Type, useContext: $BlockPlaceContext$Type): boolean
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "supportsBlankColor"(): boolean
public "getColor"(): $DyeColor
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "playExtinguishSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type): void
public "spawnSmokeParticles"(state: $BlockState$Type, pos: $BlockPos$Type, level: $LevelAccessor$Type): void
public "canBeExtinguishedBy"(item: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "changeItemColor"(color: $DyeColor$Type): $Item
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandleHolderBlock$Type = ($CandleHolderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CandleHolderBlock_ = $CandleHolderBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$RopeArrowItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrowItem, $ArrowItem$Type} from "packages/net/minecraft/world/item/$ArrowItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RopeArrowItem extends $ArrowItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(builder: $Item$Properties$Type)

public "isInfinite"(stack: $ItemStack$Type, bow: $ItemStack$Type, player: $Player$Type): boolean
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "overrideStackedOnOther"(ropeArrow: $ItemStack$Type, pSlot: $Slot$Type, pAction: $ClickAction$Type, pPlayer: $Player$Type): boolean
public "getBarWidth"(stack: $ItemStack$Type): integer
public "overrideOtherStackedOnMe"(ropeArrow: $ItemStack$Type, ropeStack: $ItemStack$Type, pSlot: $Slot$Type, pAction: $ClickAction$Type, pPlayer: $Player$Type, pAccess: $SlotAccess$Type): boolean
public "getBarColor"(stack: $ItemStack$Type): integer
public "isEnchantable"(stack: $ItemStack$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "isRepairable"(stack: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "isValidRepairItem"(toRepair: $ItemStack$Type, repair: $ItemStack$Type): boolean
public "isBookEnchantable"(stack: $ItemStack$Type, book: $ItemStack$Type): boolean
public static "addRopes"(stack: $ItemStack$Type, ropes: integer): void
public static "getRopeCapacity"(): integer
public static "getRopes"(stack: $ItemStack$Type): integer
public static "isValidRope"(stack: $ItemStack$Type): boolean
public "createArrow"(world: $Level$Type, stack: $ItemStack$Type, shooter: $LivingEntity$Type): $AbstractArrow
get "enchantmentValue"(): integer
get "ropeCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RopeArrowItem$Type = ($RopeArrowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RopeArrowItem_ = $RopeArrowItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$ClockBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ClockBlock extends $WaterBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "HOUR": $IntegerProperty
static readonly "TWO_FACED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "canBeReplaced"(state: $BlockState$Type, useContext: $BlockPlaceContext$Type): boolean
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public static "displayCurrentHour"(world: $Level$Type, player: $Player$Type): void
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClockBlock$Type = ($ClockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClockBlock_ = $ClockBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$SimpleDirtyCounter" {
import {$CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"

export class $CustomMapData$SimpleDirtyCounter implements $CustomMapData$DirtyCounter {

constructor()

public "isDirty"(): boolean
public "markDirty"(): void
public "clearDirty"(): void
get "dirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$SimpleDirtyCounter$Type = ($CustomMapData$SimpleDirtyCounter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapData$SimpleDirtyCounter_ = $CustomMapData$SimpleDirtyCounter$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$Bunting" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModBlockProperties$Bunting extends $Enum<($ModBlockProperties$Bunting)> implements $StringRepresentable {
static readonly "NONE": $ModBlockProperties$Bunting
static readonly "ROPE": $ModBlockProperties$Bunting
static readonly "BUNTING": $ModBlockProperties$Bunting


public "toString"(): string
public static "values"(): ($ModBlockProperties$Bunting)[]
public static "valueOf"(name: string): $ModBlockProperties$Bunting
public "getSerializedName"(): string
public "isConnected"(): boolean
public "hasBunting"(): boolean
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
get "connected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$Bunting$Type = (("rope") | ("bunting") | ("none")) | ($ModBlockProperties$Bunting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$Bunting_ = $ModBlockProperties$Bunting$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$EndermanHeadItem" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StandingAndWallBlockItem, $StandingAndWallBlockItem$Type} from "packages/net/minecraft/world/item/$StandingAndWallBlockItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EndermanHeadItem extends $StandingAndWallBlockItem implements $ICustomItemRendererProvider {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(block: $Block$Type, block2: $Block$Type, properties: $Item$Properties$Type)

public "isEnderMask"(stack: $ItemStack$Type, player: $Player$Type, endermanEntity: $EnderMan$Type): boolean
public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
public "asItem"(): $Item
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndermanHeadItem$Type = ($EndermanHeadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndermanHeadItem_ = $EndermanHeadItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$SoftFluid, $SoftFluid$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$FluidContainerList, $FluidContainerList$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FluidContainerList"
import {$FluidContainerList$Category, $FluidContainerList$Category$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FluidContainerList$Category"
import {$FoodProvider, $FoodProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FoodProvider"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $SoftFluidStack {
static readonly "CODEC": $Codec<($SoftFluidStack)>

/**
 * 
 * @deprecated
 */
constructor(fluid: $Holder$Type<($SoftFluid$Type)>)
/**
 * 
 * @deprecated
 */
constructor(fluid: $Holder$Type<($SoftFluid$Type)>, count: integer)
/**
 * 
 * @deprecated
 */
constructor(fluid: $Holder$Type<($SoftFluid$Type)>, count: integer, tag: $CompoundTag$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "load"(tag: $CompoundTag$Type): $SoftFluidStack
public "isEmpty"(): boolean
public "split"(amount: integer): $SoftFluidStack
public static "of"(fluid: $Holder$Type<($SoftFluid$Type)>, count: integer, tag: $CompoundTag$Type): $SoftFluidStack
public static "of"(fluid: $Holder$Type<($SoftFluid$Type)>): $SoftFluidStack
public static "of"(fluid: $Holder$Type<($SoftFluid$Type)>, count: integer): $SoftFluidStack
public static "empty"(): $SoftFluidStack
public "save"(compoundTag: $CompoundTag$Type): $CompoundTag
public "copy"(): $SoftFluidStack
public "is"(tag: $TagKey$Type<($SoftFluid$Type)>): boolean
public "is"(location: $ResourceKey$Type<($SoftFluid$Type)>): boolean
/**
 * 
 * @deprecated
 */
public "is"(fluid: $SoftFluid$Type): boolean
public "is"(fluid: $Holder$Type<($SoftFluid$Type)>): boolean
public "grow"(amount: integer): void
public "getTag"(): $CompoundTag
public "getCount"(): integer
public static "bottle"(fluid: $Holder$Type<($SoftFluid$Type)>): $SoftFluidStack
public static "bowl"(fluid: $Holder$Type<($SoftFluid$Type)>): $SoftFluidStack
public static "bucket"(fluid: $Holder$Type<($SoftFluid$Type)>): $SoftFluidStack
public "isEquivalent"(fluid: $Fluid$Type): boolean
public "setCount"(count: integer): void
public "getContainerList"(): $FluidContainerList
public "shrink"(amount: integer): void
public "setTag"(tag: $CompoundTag$Type): void
public "isFluidStackTagEqual"(other: $SoftFluidStack$Type): boolean
public "getOrCreateTagElement"(key: string): $CompoundTag
public static "fromItem"(itemStack: $ItemStack$Type): $Pair<($SoftFluidStack), ($FluidContainerList$Category)>
public static "fromFluid"(fluid: $FluidState$Type): $SoftFluidStack
public static "fromFluid"(fluid: $Fluid$Type, amount: integer, tag: $CompoundTag$Type): $SoftFluidStack
public "fluidKey"(): $ResourceKey<($SoftFluid)>
public "getOrCreateTag"(): $CompoundTag
public "hasTag"(): boolean
public "copyWithCount"(count: integer): $SoftFluidStack
public "isFluidEqual"(other: $SoftFluidStack$Type): boolean
public "addTagElement"(key: string, tag: $Tag$Type): void
public "toItem"(emptyContainer: $ItemStack$Type, dontModifyStack: boolean): $Pair<($ItemStack), ($FluidContainerList$Category)>
public "getVanillaFluid"(): $Fluid
public "getFlowingColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
public "getStillColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
public "getFoodProvider"(): $FoodProvider
public "getParticleColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
/**
 * 
 * @deprecated
 */
public "getFluid"(): $Holder<($SoftFluid)>
public "getHolder"(): $Holder<($SoftFluid)>
public "fluid"(): $SoftFluid
get "tag"(): $CompoundTag
get "count"(): integer
set "count"(value: integer)
get "containerList"(): $FluidContainerList
set "tag"(value: $CompoundTag$Type)
get "orCreateTag"(): $CompoundTag
get "vanillaFluid"(): $Fluid
get "foodProvider"(): $FoodProvider
get "holder"(): $Holder<($SoftFluid)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftFluidStack$Type = ($SoftFluidStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoftFluidStack_ = $SoftFluidStack$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$WildFlaxBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"

export class $WildFlaxBlock extends $BushBlock implements $BonemealableBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "isBonemealSuccess"(worldIn: $Level$Type, rand: $RandomSource$Type, pos: $BlockPos$Type, state: $BlockState$Type): boolean
public "isValidBonemealTarget"(worldIn: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, isClient: boolean): boolean
public "performBonemeal"(worldIn: $ServerLevel$Type, random: $RandomSource$Type, pos: $BlockPos$Type, state: $BlockState$Type): void
public "getFlammability"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "getFireSpreadSpeed"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "canBeReplaced"(state: $BlockState$Type, useContext: $BlockPlaceContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildFlaxBlock$Type = ($WildFlaxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WildFlaxBlock_ = $WildFlaxBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidTank" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoftFluidStack, $SoftFluidStack$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$SoftFluid, $SoftFluid$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid"

export class $SoftFluidTank {
static readonly "BOTTLE_COUNT": integer
static readonly "BOWL_COUNT": integer
static readonly "BUCKET_COUNT": integer


public "load"(compound: $CompoundTag$Type): void
public "clear"(): void
public "isEmpty"(): boolean
public "save"(compound: $CompoundTag$Type): $CompoundTag
public static "create"(capacity: integer): $SoftFluidTank
public "getSpace"(): integer
public "getCapacity"(): integer
public "getFluidCount"(): integer
public "addFluid"(stack: $SoftFluidStack$Type, simulate: boolean): integer
/**
 * 
 * @deprecated
 */
public "addFluid"(stack: $SoftFluidStack$Type): boolean
public "capCapacity"(): void
public "isFull"(): boolean
public "getHeight"(maxHeight: float): float
public "getCachedParticleColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
public "getComparatorOutput"(): integer
public "getCachedStillColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
public "getFluidValue"(): $SoftFluid
public "setFluid"(fluid: $SoftFluidStack$Type): void
public "interactWithItem"(stack: $ItemStack$Type, world: $Level$Type, pos: $BlockPos$Type, simulate: boolean): $ItemStack
public "getCachedFlowingColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
public "containsFood"(): boolean
public "tryDrinkUpFluid"(player: $Player$Type, world: $Level$Type): boolean
/**
 * 
 * @deprecated
 */
public "getTintColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
/**
 * 
 * @deprecated
 */
public "getParticleColor"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
public "getFluid"(): $SoftFluidStack
public "interactWithPlayer"(player: $Player$Type, hand: $InteractionHand$Type, world: $Level$Type, pos: $BlockPos$Type): boolean
public static "getLiquidCountFromItem"(i: $Item$Type): integer
public "removeFluid"(amount: integer, simulate: boolean): $SoftFluidStack
public "fillItem"(emptyContainer: $ItemStack$Type, world: $Level$Type, pos: $BlockPos$Type, simulate: boolean): $InteractionResultHolder<($ItemStack)>
public "fillItem"(emptyContainer: $ItemStack$Type, level: $Level$Type, pos: $BlockPos$Type, simulate: boolean, playSound: boolean): $InteractionResultHolder<($ItemStack)>
public "isFluidCompatible"(fluidStack: $SoftFluidStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canAddSoftFluid"(fluidStack: $SoftFluidStack$Type): boolean
public "fillBucket"(world: $Level$Type, pos: $BlockPos$Type): $InteractionResultHolder<($ItemStack)>
public "drainItem"(filledContainerStack: $ItemStack$Type, world: $Level$Type, pos: $BlockPos$Type, simulate: boolean): $InteractionResultHolder<($ItemStack)>
public "drainItem"(filledContainer: $ItemStack$Type, level: $Level$Type, pos: $BlockPos$Type, simulate: boolean, playSound: boolean): $InteractionResultHolder<($ItemStack)>
/**
 * 
 * @deprecated
 */
public "transferFluid"(destination: $SoftFluidTank$Type, amount: integer): boolean
/**
 * 
 * @deprecated
 */
public "transferFluid"(destination: $SoftFluidTank$Type): boolean
public "fillBottle"(world: $Level$Type, pos: $BlockPos$Type): $InteractionResultHolder<($ItemStack)>
public "fillBowl"(world: $Level$Type, pos: $BlockPos$Type): $InteractionResultHolder<($ItemStack)>
public "refreshTintCache"(): void
public "copyContent"(other: $SoftFluidTank$Type): void
/**
 * 
 * @deprecated
 */
public "getFlowingTint"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
get "empty"(): boolean
get "space"(): integer
get "capacity"(): integer
get "fluidCount"(): integer
get "full"(): boolean
get "comparatorOutput"(): integer
get "fluidValue"(): $SoftFluid
set "fluid"(value: $SoftFluidStack$Type)
get "fluid"(): $SoftFluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftFluidTank$Type = ($SoftFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoftFluidTank_ = $SoftFluidTank$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/fluids/$FiniteFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FiniteFluid extends $Fluid {
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(maxLayers: integer, block: $Supplier$Type<(any)>, bucket: $Supplier$Type<(any)>)

public "shouldSlowDown"(state: $FluidState$Type): boolean
public "getHeight"(state: $FluidState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getTickDelay"(level: $LevelReader$Type): integer
public "getAmount"(state: $FluidState$Type): integer
public "isSource"(state: $FluidState$Type): boolean
public "getOwnHeight"(state: $FluidState$Type): float
public "getBucket"(): $Item
public "m_6292_"(level: $Level$Type, pos: $BlockPos$Type, state: $FluidState$Type): void
public "m_7000_"(blockReader: $BlockGetter$Type, pos: $BlockPos$Type, fluidState: $FluidState$Type): $Vec3
public "getShape"(state: $FluidState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getLayersPerBlock"(): integer
public "makeState"(level: integer): $FluidState
get "bucket"(): $Item
get "layersPerBlock"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiniteFluid$Type = ($FiniteFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiniteFluid_ = $FiniteFluid$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$QuiverItem$Data" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SelectableContainerItem$AbstractData, $SelectableContainerItem$AbstractData$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$SelectableContainerItem$AbstractData"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $QuiverItem$Data extends $SelectableContainerItem$AbstractData {

 "getSelected"(): $ItemStack
 "getSelected"(supporterArrows: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "canAcceptItem"(toInsert: $ItemStack$Type): boolean
 "consumeSelected"(): void
 "cycle"(slotsMoved: integer): boolean
 "cycle"(): boolean
 "cycle"(clockWise: boolean): boolean
 "getContentView"(): $List<($ItemStack)>
 "getSelectedSlot"(): integer
 "removeOneStack"(): $Optional<($ItemStack)>
 "updateSelectedIfNeeded"(): void
 "getSelectedItemCount"(): integer
 "setSelectedSlot"(arg0: integer): void
 "tryAdding"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "tryAdding"(pInsertedStack: $ItemStack$Type): $ItemStack
}

export namespace $QuiverItem$Data {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuiverItem$Data$Type = ($QuiverItem$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuiverItem$Data_ = $QuiverItem$Data$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$QuiverItem" {
import {$SelectableContainerItem, $SelectableContainerItem$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$SelectableContainerItem"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotReference, $SlotReference$Type} from "packages/net/mehvahdjukaar/supplementaries/common/utils/$SlotReference"
import {$QuiverItem$Data, $QuiverItem$Data$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$QuiverItem$Data"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuiverItem extends $SelectableContainerItem<($QuiverItem$Data)> implements $DyeableLeatherItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public static "getQuiverData"(stack: $ItemStack$Type): $QuiverItem$Data
public "getShareTag"(stack: $ItemStack$Type): $CompoundTag
public "readShareTag"(stack: $ItemStack$Type, tag: $CompoundTag$Type): void
public static "findActiveQuiverSlot"(entity: $LivingEntity$Type): $SlotReference
public "getMaxSlots"(): integer
public "initCapabilities"(stack: $ItemStack$Type, nbt: $CompoundTag$Type): $ICapabilityProvider
public static "canAcceptItem"(toInsert: $ItemStack$Type): boolean
public static "findActiveQuiver"(entity: $LivingEntity$Type): $ItemStack
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "clearColor"(arg0: $ItemStack$Type): void
public "getColor"(arg0: $ItemStack$Type): integer
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
get "maxSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuiverItem$Type = ($QuiverItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuiverItem_ = $QuiverItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$JarItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$AbstractMobContainerItem, $AbstractMobContainerItem$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$AbstractMobContainerItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $JarItem extends $AbstractMobContainerItem implements $ICustomItemRendererProvider {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(blockIn: $Block$Type, properties: $Item$Properties$Type)

public "getUseDuration"(stack: $ItemStack$Type): integer
public "finishUsingItem"(stack: $ItemStack$Type, world: $Level$Type, entity: $LivingEntity$Type): $ItemStack
public "use"(world: $Level$Type, playerEntity: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "addPlacementTooltip"(tooltip: $List$Type<($Component$Type)>): void
public "playReleaseSound"(world: $Level$Type, v: $Vec3$Type): void
public "playCatchSound"(player: $Player$Type): void
public "canItemCatch"(e: $Entity$Type): boolean
public "saveEntityInItem"(entity: $Entity$Type, currentStack: $ItemStack$Type, bucket: $ItemStack$Type): $ItemStack
public "isBoat"(e: $Entity$Type): boolean
public "blocksPlacement"(): boolean
public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
public "doInteract"(stack: $ItemStack$Type, player: $Player$Type, entity: $Entity$Type, hand: $InteractionHand$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
public "asItem"(): $Item
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JarItem$Type = ($JarItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JarItem_ = $JarItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$StructureTempBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $StructureTempBlock extends $Block implements $EntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTempBlock$Type = ($StructureTempBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTempBlock_ = $StructureTempBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$StickBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IRotatable, $IRotatable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRotatable"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StickBlock extends $WaterBlock implements $IRotatable {
static readonly "AXIS_X": $BooleanProperty
static readonly "AXIS_Y": $BooleanProperty
static readonly "AXIS_Z": $BooleanProperty
static readonly "AXIS2PROPERTY": $Map<($Direction$Axis), ($BooleanProperty)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type, fireSpread: integer)
constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getFlammability"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "getFireSpreadSpeed"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "getDrops"(state: $BlockState$Type, pBuilder: $LootParams$Builder$Type): $List<($ItemStack)>
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "canBeReplaced"(state: $BlockState$Type, context: $BlockPlaceContext$Type): boolean
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public static "findConnectedFlag"(world: $Level$Type, pos: $BlockPos$Type, searchDir: $Direction$Type, moveDir: $Direction$Type, it: integer): boolean
public "applyRotationLock"(world: $Level$Type, blockPos: $BlockPos$Type, state: $BlockState$Type, dir: $Direction$Type, half: integer): $BlockState
public static "getStickShape"(x: boolean, y: boolean, z: boolean): $VoxelShape
public "getRotatedState"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($BlockState)>
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "rotateOverAxis"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($Direction)>
public "onRotated"(newState: $BlockState$Type, oldState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StickBlock$Type = ($StickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StickBlock_ = $StickBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$TrappedPresentItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PresentItem, $PresentItem$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$PresentItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrappedPresentItem extends $PresentItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "getName"(stack: $ItemStack$Type): $Component
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrappedPresentItem$Type = ($TrappedPresentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrappedPresentItem_ = $TrappedPresentItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FlippedBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $FlippedBlock extends $Block {
static readonly "FLIPPED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlippedBlock$Type = ($FlippedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlippedBlock_ = $FlippedBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/tiles/$MovingSlidyBlockEntity" {
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$Type} from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MovingSlidyBlockEntity extends $PistonMovingBlockEntity {
static readonly "TICK_MOVEMENT": double
 "progress": float
 "progressO": float
 "lastTicked": long
 "deathTicks": integer

constructor(pos: $BlockPos$Type, blockState: $BlockState$Type)
constructor(pos: $BlockPos$Type, blockState: $BlockState$Type, movedState: $BlockState$Type, direction: $Direction$Type, extending: boolean, isSourcePiston: boolean)

public static "tick"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, t: $MovingSlidyBlockEntity$Type): void
public static "shouldCancelObserverUpdateHack"(neighbor: $BlockState$Type): boolean
public "addOffset"(offset: float): void
public "getType"(): $BlockEntityType<(any)>
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovingSlidyBlockEntity$Type = ($MovingSlidyBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MovingSlidyBlockEntity_ = $MovingSlidyBlockEntity$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FrameBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$IFrameBlock, $IFrameBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$IFrameBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$MimicBlock, $MimicBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$MimicBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FrameBlock extends $MimicBlock implements $EntityBlock, $IFrameBlock {
static readonly "FRAMED_BLOCKS": $List<($Block)>
static readonly "HAS_BLOCK": $BooleanProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "OCCLUSION_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getCollisionShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getOcclusionShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getFilledBlock"(inserted: $Block$Type): $Block
public "getShadeBrightness"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getLightBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getFluidState"(state: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "skipRendering"(state: $BlockState$Type, adjacentBlockState: $BlockState$Type, side: $Direction$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, trace: $BlockHitResult$Type): $InteractionResult
public "getEnchantPowerBonus"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): float
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "registerFilledBlock"(inserted: $Block$Type, filled: $Block$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameBlock$Type = ($FrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameBlock_ = $FrameBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FlagBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IColored, $IColored$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IColored"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FlagBlock extends $WaterBlock implements $EntityBlock, $IColored {
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(color: $DyeColor$Type, properties: $BlockBehaviour$Properties$Type)

public "isPossibleToRespawnInThis"(state: $BlockState$Type): boolean
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getFlammability"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "getFireSpreadSpeed"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getColor"(): $DyeColor
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
/**
 * 
 * @deprecated
 */
public "changeItemColor"(color: $DyeColor$Type): $Item
public "supportsBlankColor"(): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlagBlock$Type = ($FlagBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlagBlock_ = $FlagBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$LunchBoxItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$ILeftClickReact, $ILeftClickReact$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$ILeftClickReact"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SlotReference, $SlotReference$Type} from "packages/net/mehvahdjukaar/supplementaries/common/utils/$SlotReference"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LunchBoxItem$Data, $LunchBoxItem$Data$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$LunchBoxItem$Data"
import {$SelectableContainerItem, $SelectableContainerItem$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$SelectableContainerItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LunchBoxItem extends $SelectableContainerItem<($LunchBoxItem$Data)> implements $ICustomItemRendererProvider, $ILeftClickReact {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getFoodProperties"(stack: $ItemStack$Type, entity: $LivingEntity$Type): $FoodProperties
public "getUseDuration"(stack: $ItemStack$Type): integer
public "canAttackBlock"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "finishUsingItem"(stack: $ItemStack$Type, level: $Level$Type, livingEntity: $LivingEntity$Type): $ItemStack
public "use"(pLevel: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "appendHoverText"(pStack: $ItemStack$Type, level: $Level$Type, list: $List$Type<($Component$Type)>, pIsAdvanced: $TooltipFlag$Type): void
public "getShareTag"(stack: $ItemStack$Type): $CompoundTag
public "readShareTag"(stack: $ItemStack$Type, tag: $CompoundTag$Type): void
public static "getLunchBoxData"(stack: $ItemStack$Type): $LunchBoxItem$Data
public "getMaxSlots"(): integer
public static "findActiveLunchBox"(entity: $LivingEntity$Type): $ItemStack
public "initCapabilities"(stack: $ItemStack$Type, nbt: $CompoundTag$Type): $ICapabilityProvider
public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
public "onLeftClick"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type): boolean
public static "findActiveLunchBoxSlot"(entity: $LivingEntity$Type): $SlotReference
public static "canAcceptItem"(toInsert: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
public "asItem"(): $Item
get "maxSlots"(): integer
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunchBoxItem$Type = ($LunchBoxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunchBoxItem_ = $LunchBoxItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FlaxBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IBeeGrowable, $IBeeGrowable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IBeeGrowable"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$CropBlock, $CropBlock$Type} from "packages/net/minecraft/world/level/block/$CropBlock"

export class $FlaxBlock extends $CropBlock implements $IBeeGrowable {
static readonly "DOUBLE_AGE": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "growCrops"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): void
public "randomTick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getPollinated"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): boolean
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "isValidBonemealTarget"(worldIn: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, isClient: boolean): boolean
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, rayTraceResult: $BlockHitResult$Type): $InteractionResult
public "growCropBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, increment: integer): void
public "canGrowUp"(worldIn: $BlockGetter$Type, downPos: $BlockPos$Type): boolean
public "isSingle"(state: $BlockState$Type): boolean
public "placeAt"(worldIn: $LevelAccessor$Type, pos: $BlockPos$Type, flags: integer): void
public "playerDestroy"(worldIn: $Level$Type, player: $Player$Type, pos: $BlockPos$Type, state: $BlockState$Type, te: $BlockEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "isPlantFullyGrown"(state: $BlockState$Type, pos: $BlockPos$Type, level: $Level$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlaxBlock$Type = ($FlaxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlaxBlock_ = $FlaxBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $WaterBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation


public "getFluidState"(state: $BlockState$Type): $FluidState
public "isPathfindable"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, PathComputationType: $PathComputationType$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterBlock$Type = ($WaterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterBlock_ = $WaterBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SugarCubeItem" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SugarCubeItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SugarCubeItem$Type = ($SugarCubeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SugarCubeItem_ = $SugarCubeItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/mixins/forge/$FireBlockAccessor" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $FireBlockAccessor {

 "invokeTryCatchFire"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $RandomSource$Type, arg4: integer, arg5: $Direction$Type): void

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $RandomSource$Type, arg4: integer, arg5: $Direction$Type): void
}

export namespace $FireBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBlockAccessor$Type = ($FireBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireBlockAccessor_ = $FireBlockAccessor$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SconceBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$LightUpWaterBlock, $LightUpWaterBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LightUpWaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SconceBlock extends $LightUpWaterBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor<T extends $ParticleType<(any)>>(properties: $BlockBehaviour$Properties$Type, particleData: $Supplier$Type<(T)>)
constructor<T extends $ParticleType<(any)>>(properties: $BlockBehaviour$Properties$Type, lightLevel: integer, particleData: $Supplier$Type<(T)>)

public "animateTick"(stateIn: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
/**
 * 
 * @deprecated
 */
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SconceBlock$Type = ($SconceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SconceBlock_ = $SconceBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SongInstrumentItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SongInstrumentItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any


public "getUseDuration"(stack: $ItemStack$Type): integer
public "getSound"(): $SoundEvent
public "spawnNoteParticle"(level: $Level$Type, entity: $LivingEntity$Type, note: integer): void
public "onUseTick"(level: $Level$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseDuration: integer): void
public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(pStack: $ItemStack$Type): $UseAnim
public "releaseUsing"(pStack: $ItemStack$Type, pLevel: $Level$Type, entity: $LivingEntity$Type, pTimeCharged: integer): void
public "getVolume"(): float
public "getPitch"(note: integer): float
get "sound"(): $SoundEvent
get "volume"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SongInstrumentItem$Type = ($SongInstrumentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SongInstrumentItem_ = $SongInstrumentItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CustomMapData$Type, $CustomMapData$Type$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $CustomMapData<H extends $CustomMapData$DirtyCounter> {

 "load"(arg0: $CompoundTag$Type): void
 "save"(arg0: $CompoundTag$Type): void
 "getType"(): $CustomMapData$Type<(any)>
 "persistOnRescale"(): boolean
 "onItemUpdate"(data: $MapItemSavedData$Type, entity: $Entity$Type): boolean
 "setDirty"(data: $MapItemSavedData$Type, dirtySetter: $Consumer$Type<(H)>): void
 "onItemTooltip"(data: $MapItemSavedData$Type, stack: $ItemStack$Type): $Component
 "persistOnCopyOrLock"(): boolean
 "saveToUpdateTag"(arg0: $CompoundTag$Type, arg1: H): void
 "loadUpdateTag"(arg0: $CompoundTag$Type): void
 "createDirtyCounter"(): H
}

export namespace $CustomMapData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$Type<H> = ($CustomMapData<(H)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapData_<H> = $CustomMapData$Type<(H)>;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$AntiqueInkItem" {
import {$SignBlockEntity, $SignBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SignBlockEntity"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SignApplicator, $SignApplicator$Type} from "packages/net/minecraft/world/item/$SignApplicator"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SignText, $SignText$Type} from "packages/net/minecraft/world/level/block/entity/$SignText"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AntiqueInkItem extends $Item implements $SignApplicator {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public static "isEnabled"(): boolean
public "tryApplyToSign"(level: $Level$Type, signBlockEntity: $SignBlockEntity$Type, front: boolean, player: $Player$Type): boolean
public static "toggleAntiqueInkOnSigns"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type, tile: $BlockEntity$Type, newState: boolean): boolean
public static "setAntiqueInk"(tile: $BlockEntity$Type, ink: boolean): void
public static "setAntiqueInk"(stack: $ItemStack$Type, ink: boolean): void
public static "hasAntiqueInk"(stack: $ItemStack$Type): boolean
public "canApplyToSign"(arg0: $SignText$Type, arg1: $Player$Type): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AntiqueInkItem$Type = ($AntiqueInkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AntiqueInkItem_ = $AntiqueInkItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$FuelBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FuelBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(pBlock: $Block$Type, pProperties: $Item$Properties$Type, burnTime: $Supplier$Type<(integer)>)

public "getBurnTime"(itemStack: $ItemStack$Type, recipeType: $RecipeType$Type<(any)>): integer
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelBlockItem$Type = ($FuelBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelBlockItem_ = $FuelBlockItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$StructureLocator$LocatedStruct" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$StructureStart, $StructureStart$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureStart"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StructureLocator$LocatedStruct extends $Record {

constructor(pair: $Pair$Type<($BlockPos$Type), ($Holder$Type<($Structure$Type)>)>)
constructor(pos: $BlockPos$Type, structure: $Holder$Type<($Structure$Type)>, start: $StructureStart$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "start"(): $StructureStart
public "pos"(): $BlockPos
public "structure"(): $Holder<($Structure)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureLocator$LocatedStruct$Type = ($StructureLocator$LocatedStruct);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureLocator$LocatedStruct_ = $StructureLocator$LocatedStruct$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$BasaltAshFeature" {
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$BlockStateProvider, $BlockStateProvider$Type} from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProvider"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$BasaltAshFeature$Config, $BasaltAshFeature$Config$Type} from "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$BasaltAshFeature$Config"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RuleTest, $RuleTest$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $BasaltAshFeature extends $Feature<($BasaltAshFeature$Config)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(codec: $Codec$Type<($BasaltAshFeature$Config$Type)>)

public "placeAsh"(worldGenLevel: $WorldGenLevel$Type, ySpread: integer, origin: $BlockPos$Type, basaltTest: $RuleTest$Type, ash: $BlockStateProvider$Type, belowAsh: $Optional$Type<($BlockState$Type)>, random: $RandomSource$Type): boolean
public "place"(context: $FeaturePlaceContext$Type<($BasaltAshFeature$Config$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasaltAshFeature$Type = ($BasaltAshFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasaltAshFeature_ = $BasaltAshFeature$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BlackboardBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$Vector2i, $Vector2i$Type} from "packages/org/joml/$Vector2i"
import {$IWashable, $IWashable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IWashable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlackboardBlockTile, $BlackboardBlockTile$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/tiles/$BlackboardBlockTile"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ISimpleBrushable, $ISimpleBrushable$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ISimpleBrushable"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlackboardBlock extends $WaterBlock implements $EntityBlock, $IWashable, $ISimpleBrushable {
static readonly "FACING": $DirectionProperty
static readonly "GLOWING": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "brush"(state: $BlockState$Type, pos: $BlockPos$Type, level: $Level$Type, stack: $ItemStack$Type, livingEntity: $Player$Type, arm: $HumanoidArm$Type, hit: $BlockHitResult$Type, particlesDir: $Vec3$Type): boolean
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "tryWash"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, hitVec: $Vec3$Type): boolean
public static "getStackChalkColor"(stack: $ItemStack$Type): $DyeColor
public static "colorFromByte"(b: byte): integer
public static "colorToByte"(color: $DyeColor$Type): byte
public "getBlackboardItem"(te: $BlackboardBlockTile$Type): $ItemStack
public static "getHitSubPixel"(hit: $BlockHitResult$Type): $Vector2i
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
/**
 * 
 * @deprecated
 */
public "tryWash"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackboardBlock$Type = ($BlackboardBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackboardBlock_ = $BlackboardBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$PresentItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IColored, $IColored$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IColored"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PresentItem extends $BlockItem implements $IColored {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, components: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "supportsBlankColor"(): boolean
public "getColor"(): $DyeColor
/**
 * 
 * @deprecated
 */
public "changeItemColor"(color: $DyeColor$Type): $Item
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PresentItem$Type = ($PresentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PresentItem_ = $PresentItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$WrenchItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WrenchItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(pProperties: $Item$Properties$Type)

public "canApplyAtEnchantingTable"(stack: $ItemStack$Type, enchantment: $Enchantment$Type): boolean
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "hurtEnemy"(pStack: $ItemStack$Type, pTarget: $LivingEntity$Type, pAttacker: $LivingEntity$Type): boolean
public "interactLivingEntity"(stack: $ItemStack$Type, player: $Player$Type, entity: $LivingEntity$Type, pUsedHand: $InteractionHand$Type): $InteractionResult
public "isValidRepairItem"(pStack: $ItemStack$Type, pRepairCandidate: $ItemStack$Type): boolean
public "getDefaultAttributeModifiers"(pEquipmentSlot: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "onLeftClickEntity"(stack: $ItemStack$Type, player: $Player$Type, entity: $Entity$Type): boolean
public "getDamage"(): float
public static "playTurningEffects"(pos: $BlockPos$Type, shiftDown: boolean, dir: $Direction$Type, level: $Level$Type, player: $Player$Type): void
get "damage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrenchItem$Type = ($WrenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrenchItem_ = $WrenchItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SelectableContainerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$SelectableContainerItem$AbstractData, $SelectableContainerItem$AbstractData$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$SelectableContainerItem$AbstractData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SelectableContainerItem<D extends $SelectableContainerItem$AbstractData> extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getData"(arg0: $ItemStack$Type): D
public "getUseDuration"(stack: $ItemStack$Type): integer
public "onDestroyed"(pItemEntity: $ItemEntity$Type): void
public "use"(pLevel: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(pStack: $ItemStack$Type): boolean
public "overrideStackedOnOther"(quiver: $ItemStack$Type, pSlot: $Slot$Type, pAction: $ClickAction$Type, pPlayer: $Player$Type): boolean
public "getBarWidth"(pStack: $ItemStack$Type): integer
public "overrideOtherStackedOnMe"(quiver: $ItemStack$Type, pOther: $ItemStack$Type, pSlot: $Slot$Type, pAction: $ClickAction$Type, pPlayer: $Player$Type, pAccess: $SlotAccess$Type): boolean
public "getBarColor"(pStack: $ItemStack$Type): integer
public "releaseUsing"(stack: $ItemStack$Type, level: $Level$Type, livingEntity: $LivingEntity$Type, timeCharged: integer): void
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "appendHoverText"(pStack: $ItemStack$Type, pLevel: $Level$Type, pTooltipComponents: $List$Type<($Component$Type)>, pIsAdvanced: $TooltipFlag$Type): void
public "getTooltipImage"(pStack: $ItemStack$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(): boolean
public "getMaxSlots"(): integer
get "maxSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectableContainerItem$Type<D> = ($SelectableContainerItem<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectableContainerItem_<D> = $SelectableContainerItem$Type<(D)>;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/client/$IModelPartExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IModelPartExtension {

 "supp$getTextWidth"(): integer
 "supp$setDimensions"(arg0: integer, arg1: integer): void
 "supp$getTextHeight"(): integer
}

export namespace $IModelPartExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModelPartExtension$Type = ($IModelPartExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModelPartExtension_ = $IModelPartExtension$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$FlagItem" {
import {$WoodBasedBlockItem, $WoodBasedBlockItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$WoodBasedBlockItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IColored, $IColored$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IColored"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FlagItem extends $WoodBasedBlockItem implements $IColored, $ICustomItemRendererProvider {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
public "getColor"(): $DyeColor
/**
 * 
 * @deprecated
 */
public "changeItemColor"(color: $DyeColor$Type): $Item
public "supportsBlankColor"(): boolean
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
public "asItem"(): $Item
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlagItem$Type = ($FlagItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlagItem_ = $FlagItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$GobletBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $GobletBlock extends $WaterBlock implements $EntityBlock {
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "animateTick"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GobletBlock$Type = ($GobletBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GobletBlock_ = $GobletBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/type/$MapDecorationType" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$CustomMapDecoration, $CustomMapDecoration$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MapBlockMarker, $MapBlockMarker$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $MapDecorationType<D extends $CustomMapDecoration, M extends $MapBlockMarker<(D)>> {

 "getAssociatedStructure"(): $Optional<($HolderSet<($Structure)>)>
 "getWorldMarkerFromWorld"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): M
 "loadMarkerFromNBT"(arg0: $CompoundTag$Type): M
 "getCustomFactoryID"(): $ResourceLocation
 "isFromWorld"(): boolean
 "createEmptyMarker"(): M
 "getDefaultMapColor"(): integer
 "loadDecorationFromBuffer"(arg0: $FriendlyByteBuf$Type): D
}

export namespace $MapDecorationType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDecorationType$Type<D, M> = ($MapDecorationType<(D), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapDecorationType_<D, M> = $MapDecorationType$Type<(D), (M)>;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$IFirstPersonAnimationProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IFirstPersonAnimationProvider {

/**
 * 
 * @deprecated
 */
 "animateItemFirstPerson"(entity: $LivingEntity$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, matrixStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
 "animateItemFirstPerson"(entity: $Player$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, arm: $HumanoidArm$Type, poseStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
}

export namespace $IFirstPersonAnimationProvider {
function get(target: $Item$Type): $IFirstPersonAnimationProvider
function attachToItem(target: $Item$Type, object: $IFirstPersonAnimationProvider$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFirstPersonAnimationProvider$Type = ($IFirstPersonAnimationProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFirstPersonAnimationProvider_ = $IFirstPersonAnimationProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SoapBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SoapBlock extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "animateTick"(pState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "stepOn"(level: $Level$Type, pPos: $BlockPos$Type, state: $BlockState$Type, entity: $Entity$Type): void
public "triggerEvent"(pState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, pId: integer, pParam: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoapBlock$Type = ($SoapBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoapBlock_ = $SoapBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/misc/$CodecMapRegistry" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$UnboundedMapCodec, $UnboundedMapCodec$Type} from "packages/com/mojang/serialization/codecs/$UnboundedMapCodec"
import {$MapEncoder, $MapEncoder$Type} from "packages/com/mojang/serialization/$MapEncoder"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Encoder, $Encoder$Type} from "packages/com/mojang/serialization/$Encoder"
import {$MapRegistry, $MapRegistry$Type} from "packages/net/mehvahdjukaar/moonlight/api/misc/$MapRegistry"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Decoder$Boxed, $Decoder$Boxed$Type} from "packages/com/mojang/serialization/$Decoder$Boxed"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MapDecoder, $MapDecoder$Type} from "packages/com/mojang/serialization/$MapDecoder"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Decoder$Simple, $Decoder$Simple$Type} from "packages/com/mojang/serialization/$Decoder$Simple"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SimpleMapCodec, $SimpleMapCodec$Type} from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import {$Decoder$Terminal, $Decoder$Terminal$Type} from "packages/com/mojang/serialization/$Decoder$Terminal"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export class $CodecMapRegistry<T> extends $MapRegistry<($Codec<(any)>)> {

constructor(name: string)
/**
 * 
 * @deprecated
 */
constructor()

public "register"<B extends T>(name: string, value: $Codec$Type<(B)>): $Codec<(B)>
public "register"<B extends T>(name: $ResourceLocation$Type, value: $Codec$Type<(B)>): $Codec<(B)>
public static "unit"<A>(arg0: $Supplier$Type<(A)>): $Codec<(A)>
public static "unit"<A>(arg0: A): $Codec<(A)>
public static "of"<A>(arg0: $MapEncoder$Type<(A)>, arg1: $MapDecoder$Type<(A)>, arg2: $Supplier$Type<(string)>): $MapCodec<(A)>
public static "of"<A>(arg0: $Encoder$Type<(A)>, arg1: $Decoder$Type<(A)>): $Codec<(A)>
public static "of"<A>(arg0: $MapEncoder$Type<(A)>, arg1: $MapDecoder$Type<(A)>): $MapCodec<(A)>
public static "of"<A>(arg0: $Encoder$Type<(A)>, arg1: $Decoder$Type<(A)>, arg2: string): $Codec<(A)>
public static "list"<E>(arg0: $Codec$Type<(E)>): $Codec<($List<(E)>)>
public static "checkRange"<N extends (number) & ($Comparable<(N)>)>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
public static "pair"<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Pair<(F), (S)>)>
public static "optionalField"<F>(arg0: string, arg1: $Codec$Type<(F)>): $MapCodec<($Optional<(F)>)>
public static "mapPair"<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
public static "mapEither"<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
public static "compoundList"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
public static "either"<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Either<(F), (S)>)>
public static "unboundedMap"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $UnboundedMapCodec<(K), (V)>
public static "simpleMap"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>, arg2: $Keyable$Type): $SimpleMapCodec<(K), (V)>
public static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
public static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
public static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
public static "empty"<A>(): $MapEncoder<(A)>
public static "error"<A>(arg0: string): $Encoder<(A)>
public static "ofSimple"<A>(arg0: $Decoder$Simple$Type<(any)>): $Decoder<(A)>
public static "ofTerminal"<A>(arg0: $Decoder$Terminal$Type<(any)>): $Decoder<(A)>
public static "ofBoxed"<A>(arg0: $Decoder$Boxed$Type<(any)>): $Decoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecMapRegistry$Type<T> = ($CodecMapRegistry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecMapRegistry_<T> = $CodecMapRegistry$Type<(T)>;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/crafting/$SusRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$CustomRecipe, $CustomRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $SusRecipe extends $CustomRecipe {

constructor(recipeId: $ResourceLocation$Type, craftingBookCategory: $CraftingBookCategory$Type, ingredient: $Ingredient$Type, itemStack: $ItemStack$Type)

public "matches"(inv: $CraftingContainer$Type, level: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "assemble"(inv: $CraftingContainer$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(inv: $CraftingContainer$Type): $NonNullList<($ItemStack)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SusRecipe$Type = ($SusRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SusRecipe_ = $SusRecipe$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$UrnBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $UrnBlock extends $FallingBlock implements $EntityBlock, $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "TREASURE": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "tick"(state: $BlockState$Type, pLevel: $ServerLevel$Type, pos: $BlockPos$Type, pRand: $RandomSource$Type): void
public "spawnAfterBreak"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, stack: $ItemStack$Type, bl: boolean): void
public "onProjectileHit"(pLevel: $Level$Type, pState: $BlockState$Type, pHit: $BlockHitResult$Type, pProjectile: $Projectile$Type): void
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getDustColor"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getFluidState"(state: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "isPathfindable"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, pathType: $PathComputationType$Type): boolean
public "onPlace"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public static "spawnExtraBrokenParticles"(state: $BlockState$Type, pos: $BlockPos$Type, level: $Level$Type): void
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UrnBlock$Type = ($UrnBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UrnBlock_ = $UrnBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SlidyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$Type} from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IPistonMotionReact, $IPistonMotionReact$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IPistonMotionReact"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $SlidyBlock extends $FallingBlock implements $IPistonMotionReact {
static "ON_PRESSURE_PLATE": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "onMoved"(level: $Level$Type, pos: $BlockPos$Type, movedState: $BlockState$Type, direction: $Direction$Type, extending: boolean): void
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "onLand"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, state1: $BlockState$Type, blockEntity: $FallingBlockEntity$Type): void
public "getDustColor"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public static "canFall"(pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
public "onMagnetMoved"(level: $Level$Type, blockPos: $BlockPos$Type, direction: $Direction$Type, blockState: $BlockState$Type, blockEntity: $BlockEntity$Type): void
/**
 * 
 * @deprecated
 */
public "onMoved"(movedState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, extending: boolean, tile: $PistonMovingBlockEntity$Type): void
/**
 * 
 * @deprecated
 */
public "moveTick"(movedState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, aabb: $AABB$Type, tile: $PistonMovingBlockEntity$Type): void
public "moveTick"(level: $Level$Type, pos: $BlockPos$Type, movedState: $BlockState$Type, aabb: $AABB$Type, tile: $PistonMovingBlockEntity$Type): void
public "ticksWhileMoved"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlidyBlock$Type = ($SlidyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlidyBlock_ = $SlidyBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$NetheriteDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $NetheriteDoorBlock extends $DoorBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "POWERED": $BooleanProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(builder: $BlockBehaviour$Properties$Type)

public "neighborChanged"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, blockIn: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "hasTileEntity"(state: $BlockState$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getSoundType"(state: $BlockState$Type): $SoundType
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetheriteDoorBlock$Type = ($NetheriteDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetheriteDoorBlock_ = $NetheriteDoorBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SignPostItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$WoodBasedBlockItem, $WoodBasedBlockItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$WoodBasedBlockItem"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$WoodType, $WoodType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/wood/$WoodType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SignPostItem extends $WoodBasedBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(block: $Block$Type, properties: $Item$Properties$Type, wood: $WoodType$Type)

public "getDescriptionId"(): string
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignPostItem$Type = ($SignPostItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignPostItem_ = $SignPostItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$BubbleBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BubbleBlockItem extends $BlockItem implements $ICustomItemRendererProvider {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
public "asItem"(): $Item
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleBlockItem$Type = ($BubbleBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BubbleBlockItem_ = $BubbleBlockItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/resources/assets/$LangBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$AfterLanguageLoadEvent, $AfterLanguageLoadEvent$Type} from "packages/net/mehvahdjukaar/moonlight/api/events/$AfterLanguageLoadEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockType, $BlockType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/$BlockType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LangBuilder {

constructor()

public "build"(): $JsonElement
public "addEntry"(item: $Item$Type, translation: string): void
public "addEntry"(entityType: $EntityType$Type<(any)>, translation: string): void
public "addEntry"<T>(reg: $Registry$Type<(T)>, entry: T, translation: string): void
public "addEntry"(block: $Block$Type, translation: string): void
public "entries"(): $Map<(string), (string)>
public static "getReadableName"(name: string): string
public static "getReadableComponent"(key: string, ...arg1: (string)[]): $Component
public "addSimpleEntry"<T>(reg: $Registry$Type<(T)>, entry: T): void
public "addGenericEntry"(key: string, translation: string): void
public static "addDynamicEntry"(lang: $AfterLanguageLoadEvent$Type, key: string, type: $BlockType$Type, item: $Item$Type): void
public static "addDynamicEntry"(lang: $AfterLanguageLoadEvent$Type, key: string, type: $BlockType$Type, block: $Block$Type): void
public static "addDynamicEntry"(lang: $AfterLanguageLoadEvent$Type, key: string, type: $BlockType$Type, entityType: $EntityType$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LangBuilder$Type = ($LangBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LangBuilder_ = $LangBuilder$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$TurnTableBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TurnTableBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWER": $IntegerProperty
static readonly "INVERTED": $BooleanProperty
static readonly "ROTATING": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "stepOn"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, e: $Entity$Type): void
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "triggerEvent"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, eventID: integer, eventParam: integer): boolean
public "updatePower"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): boolean
public static "getPeriod"(state: $BlockState$Type): integer
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurnTableBlock$Type = ($TurnTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurnTableBlock_ = $TurnTableBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$ItemDisplayTile" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$IOwnerProtected, $IOwnerProtected$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IOwnerProtected"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$RandomizableContainerBlockEntity"

export class $ItemDisplayTile extends $RandomizableContainerBlockEntity implements $WorldlyContainer, $IOwnerProtected {
static readonly "LOOT_TABLE_TAG": string
static readonly "LOOT_TABLE_SEED_TAG": string


public "getOwner"(): $UUID
public "setOwner"(owner: $UUID$Type): void
public "createMenu"(i: integer, inventory: $Inventory$Type, player: $Player$Type): $AbstractContainerMenu
public "getContainerSize"(): integer
public "interact"(player: $Player$Type, handIn: $InteractionHand$Type, slot: integer): $InteractionResult
public "interact"(player: $Player$Type, handIn: $InteractionHand$Type): $InteractionResult
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getMaxStackSize"(): integer
public "canPlaceItem"(index: integer, stack: $ItemStack$Type): boolean
public "m_6520_"(stacks: $NonNullList$Type<($ItemStack$Type)>): void
/**
 * 
 * @deprecated
 */
public "m_6555_"(id: integer, player: $Inventory$Type): $AbstractContainerMenu
public "canTakeItemThroughFace"(index: integer, stack: $ItemStack$Type, direction: $Direction$Type): boolean
public "canPlaceItemThroughFace"(index: integer, stack: $ItemStack$Type, direction: $Direction$Type): boolean
public "getSlotsForFace"(side: $Direction$Type): (integer)[]
public "getCapability"(capability: $Capability$Type<(any)>, facing: $Direction$Type): $LazyOptional<(any)>
public "updateTileOnInventoryChanged"(): void
public "needsToUpdateClientWhenChanged"(): boolean
public "updateClientVisualsOnLoad"(): void
public "getDisplayedItem"(): $ItemStack
public "setDisplayedItem"(stack: $ItemStack$Type): void
public "getAddItemSound"(): $SoundEvent
public "onItemAdded"(player: $Player$Type, stack: $ItemStack$Type, slot: integer): void
public "onItemRemoved"(player: $Player$Type, stack: $ItemStack$Type, slot: integer): void
public "setChanged"(): void
public "m_183515_"(compound: $CompoundTag$Type): void
public "load"(compound: $CompoundTag$Type): void
public "setRemoved"(): void
public "getUpdateTag"(): $CompoundTag
public "isPublic"(): boolean
public "isOwnedBy"(player: $Player$Type): boolean
public "isAccessibleBy"(player: $Player$Type): boolean
public "saveOwner"(tag: $CompoundTag$Type): void
public "loadOwner"(tag: $CompoundTag$Type): void
public "isNotOwnedBy"(player: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "tryClear"(arg0: any): void
get "owner"(): $UUID
set "owner"(value: $UUID$Type)
get "containerSize"(): integer
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "maxStackSize"(): integer
get "displayedItem"(): $ItemStack
set "displayedItem"(value: $ItemStack$Type)
get "addItemSound"(): $SoundEvent
get "updateTag"(): $CompoundTag
get "public"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDisplayTile$Type = ($ItemDisplayTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDisplayTile_ = $ItemDisplayTile$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$DispenserBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DispenserBlockAccessor {

}

export namespace $DispenserBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserBlockAccessor$Type = ($DispenserBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DispenserBlockAccessor_ = $DispenserBlockAccessor$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/integration/$FarmersDelightCompat$TomatoLoggedBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$TomatoVineBlock, $TomatoVineBlock$Type} from "packages/vectorwing/farmersdelight/common/block/$TomatoVineBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FarmersDelightCompat$TomatoLoggedBlock extends $TomatoVineBlock {
static readonly "VINE_AGE": $IntegerProperty
static readonly "ROPELOGGED": $BooleanProperty
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "updateShape"(state: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "attemptRopeClimb"(level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "onDestroyedByPlayer"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, willHarvest: boolean, fluid: $FluidState$Type): boolean
public "getInnerBlock"(): $Block
public "playerDestroy"(level: $Level$Type, player: $Player$Type, pos: $BlockPos$Type, state: $BlockState$Type, blockEntity: $BlockEntity$Type, stack: $ItemStack$Type): void
get "innerBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmersDelightCompat$TomatoLoggedBlock$Type = ($FarmersDelightCompat$TomatoLoggedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FarmersDelightCompat$TomatoLoggedBlock_ = $FarmersDelightCompat$TomatoLoggedBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$DispenserBlockEntityAccessor" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $DispenserBlockEntityAccessor {

 "getItems"(): $NonNullList<($ItemStack)>

(): $NonNullList<($ItemStack)>
}

export namespace $DispenserBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserBlockEntityAccessor$Type = ($DispenserBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DispenserBlockEntityAccessor_ = $DispenserBlockEntityAccessor$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/integration/$FarmersDelightCompat$TomatoRopeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IRopeConnection, $IRopeConnection$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$IRopeConnection"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$FarmersDelightCompat$TomatoLoggedBlock, $FarmersDelightCompat$TomatoLoggedBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/integration/$FarmersDelightCompat$TomatoLoggedBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FarmersDelightCompat$TomatoRopeBlock extends $FarmersDelightCompat$TomatoLoggedBlock implements $IRopeConnection {
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "KNOT": $BooleanProperty
static readonly "VINE_AGE": $IntegerProperty
static readonly "ROPELOGGED": $BooleanProperty
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "canSideAcceptConnection"(state: $BlockState$Type, direction: $Direction$Type): boolean
public "updateShape"(state: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getInnerBlock"(): $Block
public static "isSupportingCeiling"(upState: $BlockState$Type, pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "isSupportingCeiling"(pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public "shouldConnectToFace"(thisState: $BlockState$Type, facingState: $BlockState$Type, facingPos: $BlockPos$Type, dir: $Direction$Type, world: $LevelReader$Type): boolean
public static "canConnectDown"(downState: $BlockState$Type): boolean
get "innerBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmersDelightCompat$TomatoRopeBlock$Type = ($FarmersDelightCompat$TomatoRopeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FarmersDelightCompat$TomatoRopeBlock_ = $FarmersDelightCompat$TomatoRopeBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$WaySignStructure" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$StructureTemplatePool, $StructureTemplatePool$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructureTemplatePool"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$StructureType, $StructureType$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Structure$GenerationStub, $Structure$GenerationStub$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import {$Structure$GenerationContext, $Structure$GenerationContext$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Structure$StructureSettings, $Structure$StructureSettings$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $WaySignStructure extends $Structure {
static readonly "CODEC": $Codec<($WaySignStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(config: $Structure$StructureSettings$Type, startPool: $Holder$Type<($StructureTemplatePool$Type)>, startJigsawName: $Optional$Type<($ResourceLocation$Type)>, minY: integer, maxY: integer)

public static "clearCache"(): void
public "m_214086_"(context: $Structure$GenerationContext$Type): $Optional<($Structure$GenerationStub)>
public "type"(): $StructureType<(any)>
public static "recomputeValidStructureCache"(access: $RegistryAccess$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaySignStructure$Type = ($WaySignStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaySignStructure_ = $WaySignStructure$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractRopeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IRopeConnection, $IRopeConnection$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$IRopeConnection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $AbstractRopeBlock extends $WaterBlock implements $IRopeConnection {
static readonly "COLLISION_SHAPE": $VoxelShape
static readonly "KNOT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "hasConnection"(arg0: $Direction$Type, arg1: $BlockState$Type): boolean
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "canSideAcceptConnection"(state: $BlockState$Type, direction: $Direction$Type): boolean
public "entityInside"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, entityIn: $Entity$Type): void
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "hasMiddleKnot"(state: $BlockState$Type): boolean
public "getFlammability"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "getFireSpreadSpeed"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "canSurvive"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "canBeReplaced"(state: $BlockState$Type, fluid: $Fluid$Type): boolean
public "skipRendering"(pState: $BlockState$Type, pAdjacentBlockState: $BlockState$Type, pSide: $Direction$Type): boolean
public "onPlace"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "shouldConnectToDir"(thisState: $BlockState$Type, currentPos: $BlockPos$Type, world: $LevelReader$Type, dir: $Direction$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isLadder"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, entity: $LivingEntity$Type): boolean
public "setConnection"(arg0: $Direction$Type, arg1: $BlockState$Type, arg2: boolean): $BlockState
public static "isSupportingCeiling"(upState: $BlockState$Type, pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "isSupportingCeiling"(pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public "shouldConnectToFace"(thisState: $BlockState$Type, facingState: $BlockState$Type, facingPos: $BlockPos$Type, dir: $Direction$Type, world: $LevelReader$Type): boolean
public static "canConnectDown"(downState: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRopeBlock$Type = ($AbstractRopeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRopeBlock_ = $AbstractRopeBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$NoticeBoardBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $NoticeBoardBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "HAS_BOOK": $BooleanProperty
static readonly "CULLED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, pBlock: $Block$Type, pFromPos: $BlockPos$Type, pIsMoving: boolean): void
public "updateShape"(state: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoticeBoardBlock$Type = ($NoticeBoardBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoticeBoardBlock_ = $NoticeBoardBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$BasaltAshFeature$Config" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockStateProvider, $BlockStateProvider$Type} from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProvider"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$RuleTest, $RuleTest$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$FeatureConfiguration, $FeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BasaltAshFeature$Config extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($BasaltAshFeature$Config)>

constructor(tries: integer, xzSpread: integer, ySpread: integer, target: $RuleTest$Type, ash: $BlockStateProvider$Type, belowAsh: $Optional$Type<($BlockState$Type)>)

public "equals"(o: any): boolean
public "target"(): $RuleTest
public "toString"(): string
public "hashCode"(): integer
public "tries"(): integer
public "ash"(): $BlockStateProvider
public "belowAsh"(): $Optional<($BlockState)>
public "xzSpread"(): integer
public "ySpread"(): integer
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasaltAshFeature$Config$Type = ($BasaltAshFeature$Config);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasaltAshFeature$Config_ = $BasaltAshFeature$Config$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/fluids/$FiniteLiquidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LiquidBlockContainer, $LiquidBlockContainer$Type} from "packages/net/minecraft/world/level/block/$LiquidBlockContainer"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BucketPickup, $BucketPickup$Type} from "packages/net/minecraft/world/level/block/$BucketPickup"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FiniteLiquidBlock extends $Block implements $BucketPickup, $LiquidBlockContainer {
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "MISSING_LEVELS": $IntegerProperty
readonly "maxLevel": integer
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(supplier: $Supplier$Type<(any)>, arg: $BlockBehaviour$Properties$Type)

public "randomTick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluid: $Fluid$Type): boolean
public "placeLiquid"(level: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluidState: $FluidState$Type): boolean
public "pickupBlock"(level: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getDrops"(arg: $BlockState$Type, arg2: $LootParams$Builder$Type): $List<($ItemStack)>
public "getFluidState"(state: $BlockState$Type): $FluidState
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "skipRendering"(state: $BlockState$Type, adjacentBlockState: $BlockState$Type, direction: $Direction$Type): boolean
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "isRandomlyTicking"(state: $BlockState$Type): boolean
public "propagatesSkylightDown"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiniteLiquidBlock$Type = ($FiniteLiquidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiniteLiquidBlock_ = $FiniteLiquidBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/dispenser_minecart/$ILevelEventRedirect" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ILevelEventRedirect {

 "supp$setRedirected"(arg0: boolean, arg1: $Vec3$Type): void

(arg0: boolean, arg1: $Vec3$Type): void
}

export namespace $ILevelEventRedirect {
function supp$tryRedirect(serverLevel: $ServerLevel$Type, pPlayer: $Player$Type, vec3: $Vec3$Type, pType: integer, pPos: $BlockPos$Type, pData: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILevelEventRedirect$Type = ($ILevelEventRedirect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILevelEventRedirect_ = $ILevelEventRedirect$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IExtendedPistonTile" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IExtendedPistonTile {

 "tickMovedBlock"(arg0: $Level$Type, arg1: $BlockPos$Type): void

(arg0: $Level$Type, arg1: $BlockPos$Type): void
}

export namespace $IExtendedPistonTile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedPistonTile$Type = ($IExtendedPistonTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedPistonTile_ = $IExtendedPistonTile$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$IThirdPersonSpecialItemRenderer" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HeadedModel, $HeadedModel$Type} from "packages/net/minecraft/client/model/$HeadedModel"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ArmedModel, $ArmedModel$Type} from "packages/net/minecraft/client/model/$ArmedModel"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IThirdPersonSpecialItemRenderer {

 "renderThirdPersonItem"<T extends $Player, M extends ($EntityModel<(T)>) & ($ArmedModel) & ($HeadedModel)>(arg0: M, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: $HumanoidArm$Type, arg4: $PoseStack$Type, arg5: $MultiBufferSource$Type, arg6: integer): void

(target: $Item$Type): $IThirdPersonSpecialItemRenderer
}

export namespace $IThirdPersonSpecialItemRenderer {
function get(target: $Item$Type): $IThirdPersonSpecialItemRenderer
function attachToItem(target: $Item$Type, object: $IThirdPersonSpecialItemRenderer$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IThirdPersonSpecialItemRenderer$Type = ($IThirdPersonSpecialItemRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IThirdPersonSpecialItemRenderer_ = $IThirdPersonSpecialItemRenderer$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/set/$BlockType$SetFinder" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockType, $BlockType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/$BlockType"

export interface $BlockType$SetFinder<T extends $BlockType> extends $Supplier<($Optional<(T)>)> {

 "get"(): $Optional<(T)>

(): $Optional<(T)>
}

export namespace $BlockType$SetFinder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockType$SetFinder$Type<T> = ($BlockType$SetFinder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockType$SetFinder_<T> = $BlockType$SetFinder$Type<(T)>;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SliceMapItem" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SliceMapItem$DepthMapData, $SliceMapItem$DepthMapData$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$SliceMapItem$DepthMapData"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$CustomMapData$Type, $CustomMapData$Type$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EmptyMapItem, $EmptyMapItem$Type} from "packages/net/minecraft/world/item/$EmptyMapItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SliceMapItem extends $EmptyMapItem {
static readonly "DEPTH_DATA_KEY": $CustomMapData$Type<($SliceMapItem$DepthMapData)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public static "init"(): void
public static "canPlayerSee"(targetY: integer, entity: $Entity$Type): boolean
public static "getRangeMultiplier"(): double
public static "getMapHeight"(data: $MapItemSavedData$Type): integer
public static "getCutoffColor"(pos: $BlockPos$Type, level: $BlockGetter$Type): $MapColor
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "createSliced"(level: $Level$Type, x: integer, z: integer, scale: byte, trackingPosition: boolean, unlimitedTracking: boolean, slice: integer): $ItemStack
get "rangeMultiplier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SliceMapItem$Type = ($SliceMapItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SliceMapItem_ = $SliceMapItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$IConvertableHorse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IConvertableHorse {

 "supp$isConverting"(): boolean

(): boolean
}

export namespace $IConvertableHorse {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConvertableHorse$Type = ($IConvertableHorse);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConvertableHorse_ = $IConvertableHorse$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/$IFluteParrot" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $IFluteParrot {

 "supplementaries$setPartyByFlute"(arg0: $Player$Type): void

(arg0: $Player$Type): void
}

export namespace $IFluteParrot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluteParrot$Type = ($IFluteParrot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluteParrot_ = $IFluteParrot$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$MovingSlidyBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$MovingPistonBlock, $MovingPistonBlock$Type} from "packages/net/minecraft/world/level/block/piston/$MovingPistonBlock"
import {$MovingSlidyBlockEntity, $MovingSlidyBlockEntity$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/tiles/$MovingSlidyBlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$PistonType, $PistonType$Type} from "packages/net/minecraft/world/level/block/state/properties/$PistonType"

export class $MovingSlidyBlock extends $MovingPistonBlock {
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($PistonType)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public static "newMovingBlockEntity"(pos: $BlockPos$Type, blockState: $BlockState$Type, movedState: $BlockState$Type, direction: $Direction$Type): $MovingSlidyBlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "maybeMove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovingSlidyBlock$Type = ($MovingSlidyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MovingSlidyBlock_ = $MovingSlidyBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$IWaxable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IWaxable {

 "isWaxed"(): boolean
 "setWaxed"(arg0: boolean): void
 "tryWaxing"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResult
}

export namespace $IWaxable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWaxable$Type = ($IWaxable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWaxable_ = $IWaxable$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$PancakeItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RecordItem, $RecordItem$Type} from "packages/net/minecraft/world/item/$RecordItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PancakeItem extends $RecordItem {
/**
 * 
 * @deprecated
 */
static readonly "BY_NAME": $Map<($SoundEvent), ($RecordItem)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(i: integer, soundEvent: $SoundEvent$Type, properties: $Item$Properties$Type, seconds: integer)

public "getDescriptionId"(): string
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PancakeItem$Type = ($PancakeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PancakeItem_ = $PancakeItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FeatherBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FeatherBlock extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "entityInside"(state: $BlockState$Type, level: $Level$Type, blockPos: $BlockPos$Type, entity: $Entity$Type): void
public "updateEntityAfterFallOn"(reader: $BlockGetter$Type, entity: $Entity$Type): void
public "fallOn"(world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, height: float): void
public "getCollisionShape"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getFlammability"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "getFireSpreadSpeed"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatherBlock$Type = ($FeatherBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeatherBlock_ = $FeatherBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/mixins/forge/$MobBucketItemAccessor" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"

export interface $MobBucketItemAccessor {

 "invokeGetFishType"(): $EntityType<(any)>

(): $EntityType<(any)>
}

export namespace $MobBucketItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobBucketItemAccessor$Type = ($MobBucketItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobBucketItemAccessor_ = $MobBucketItemAccessor$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/utils/$SlotReference$Empty" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotReference, $SlotReference$Type} from "packages/net/mehvahdjukaar/supplementaries/common/utils/$SlotReference"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IQuiverEntity, $IQuiverEntity$Type} from "packages/net/mehvahdjukaar/supplementaries/api/$IQuiverEntity"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SlotReference$Empty extends $Record implements $SlotReference {
static readonly "CODEC": $Codec<($SlotReference$Empty)>

constructor()

public "get"(player: $LivingEntity$Type): $ItemStack
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getCodec"(): $Codec<($SlotReference$Empty)>
public static "slot"(equipmentSlot: $EquipmentSlot$Type): $SlotReference
public static "decode"(buf: $FriendlyByteBuf$Type): $SlotReference
public static "encode"(buf: $FriendlyByteBuf$Type, slotReference: $SlotReference$Type): void
public "isEmpty"(): boolean
public static "inv"(invSlot: integer): $SlotReference
public "getItem"(player: $LivingEntity$Type): $Item
public static "quiver"(e: $IQuiverEntity$Type): $SlotReference
public static "hand"(pUsedHand: $InteractionHand$Type): $SlotReference
get "codec"(): $Codec<($SlotReference$Empty)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotReference$Empty$Type = ($SlotReference$Empty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotReference$Empty_ = $SlotReference$Empty$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SoftFluid$Builder, $SoftFluid$Builder$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$SoftFluid$TintMethod, $SoftFluid$TintMethod$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid$TintMethod"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$FluidContainerList, $FluidContainerList$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FluidContainerList"
import {$Triplet, $Triplet$Type} from "packages/net/mehvahdjukaar/moonlight/api/misc/$Triplet"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FoodProvider, $FoodProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FoodProvider"

export class $SoftFluid {
readonly "isGenerated": boolean
static readonly "BOTTLE_COUNT": integer
static readonly "BOWL_COUNT": integer
static readonly "BUCKET_COUNT": integer
static readonly "WATER_BUCKET_COUNT": integer
static readonly "HOLDER_CODEC": $Codec<($Holder<($SoftFluid)>)>
static readonly "COMPONENT_CODEC": $Codec<($Component)>
static readonly "CODEC": $Codec<($SoftFluid)>


/**
 * 
 * @deprecated
 */
public "isEmpty"(): boolean
public "isEnabled"(): boolean
/**
 * 
 * @deprecated
 */
public "isEmptyFluid"(): boolean
public static "addFluidSpecificAttributes"(builder: $SoftFluid$Builder$Type, fluid: $Fluid$Type): void
public "isEquivalent"(fluid: $Fluid$Type): boolean
public "isColored"(): boolean
public "getContainerList"(): $FluidContainerList
public "getEmptyContainer"(filledContainer: $Item$Type): $Optional<($Item)>
public "getFlowingTexture"(): $ResourceLocation
public "getStillTexture"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
public "getTranslationKey"(): string
public "getEquivalentFluids"(): $List<($Fluid)>
public "getAverageTextureTintColor"(): integer
public "getNbtKeyFromItem"(): $List<(string)>
public "getVanillaFluid"(): $Fluid
public "getTintMethod"(): $SoftFluid$TintMethod
public "getFoodProvider"(): $FoodProvider
public "getTintColor"(): integer
public "getLuminosity"(): integer
public "getTranslatedName"(): $Component
public "getFilledContainer"(emptyContainer: $Item$Type): $Optional<($Item)>
public "isFood"(): boolean
public "getTextureOverride"(): $ResourceLocation
public "getEmissivity"(): integer
/**
 * 
 * @deprecated
 */
public "getForgeFluid"(): $Fluid
public static "getRenderingData"(useTexturesFrom: $ResourceLocation$Type): $Triplet<($ResourceLocation), ($ResourceLocation), (integer)>
/**
 * 
 * @deprecated
 */
public "getFromMod"(): string
get "empty"(): boolean
get "enabled"(): boolean
get "emptyFluid"(): boolean
get "colored"(): boolean
get "containerList"(): $FluidContainerList
get "flowingTexture"(): $ResourceLocation
get "stillTexture"(): $ResourceLocation
get "translationKey"(): string
get "equivalentFluids"(): $List<($Fluid)>
get "averageTextureTintColor"(): integer
get "nbtKeyFromItem"(): $List<(string)>
get "vanillaFluid"(): $Fluid
get "tintMethod"(): $SoftFluid$TintMethod
get "foodProvider"(): $FoodProvider
get "tintColor"(): integer
get "luminosity"(): integer
get "translatedName"(): $Component
get "food"(): boolean
get "textureOverride"(): $ResourceLocation
get "emissivity"(): integer
get "forgeFluid"(): $Fluid
get "fromMod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftFluid$Type = ($SoftFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoftFluid_ = $SoftFluid$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BellowsBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BellowsBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWER": $IntegerProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "entityInside"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, entityIn: $Entity$Type): void
public "stepOn"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entityIn: $Entity$Type): void
public "getCollisionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getOcclusionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "updatePower"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): void
public static "createVoxelShapeY"(height: float): $VoxelShape
public static "createVoxelShapeXZ"(height: float): $VoxelShape
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BellowsBlock$Type = ($BellowsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BellowsBlock_ = $BellowsBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IBlockHolder" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $IBlockHolder {

 "setHeldBlock"(state: $BlockState$Type): boolean
 "setHeldBlock"(arg0: $BlockState$Type, arg1: integer): boolean
 "getHeldBlock"(arg0: integer): $BlockState
 "getHeldBlock"(): $BlockState
}

export namespace $IBlockHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockHolder$Type = ($IBlockHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockHolder_ = $IBlockHolder$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$CageItem" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$AbstractMobContainerItem, $AbstractMobContainerItem$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$AbstractMobContainerItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CageItem extends $AbstractMobContainerItem implements $ICustomItemRendererProvider {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "playReleaseSound"(world: $Level$Type, v: $Vec3$Type): void
public "playCatchSound"(player: $Player$Type): void
public "playFailSound"(player: $Player$Type): void
public "canItemCatch"(e: $Entity$Type): boolean
public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
public "asItem"(): $Item
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CageItem$Type = ($CageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CageItem_ = $CageItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/set/$BlockTypeRegistry" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AfterLanguageLoadEvent, $AfterLanguageLoadEvent$Type} from "packages/net/mehvahdjukaar/moonlight/api/events/$AfterLanguageLoadEvent"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockType, $BlockType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/$BlockType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$BlockType$SetFinder, $BlockType$SetFinder$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/$BlockType$SetFinder"

export class $BlockTypeRegistry<T extends $BlockType> {


public "priority"(): integer
public "get"(res: $ResourceLocation$Type): T
public "getKey"(input: T): $ResourceLocation
public "getType"(): $Class<(T)>
public "typeName"(): string
public "getDefaultType"(): T
public "getCodec"(): $Codec<(T)>
public "detectTypeFromBlock"(arg0: $Block$Type, arg1: $ResourceLocation$Type): $Optional<(T)>
public "addTypeTranslations"(language: $AfterLanguageLoadEvent$Type): void
public static "getRegistryCodec"(): $Codec<($BlockTypeRegistry<(any)>)>
public "getBlockTypeOf"(itemLike: $ItemLike$Type): T
public "addRemover"(id: $ResourceLocation$Type): void
public "registerBlockType"(newType: T): void
public "onBlockInit"(): void
public "onItemInit"(): void
public "buildAll"(): void
public "getFinders"(): $Collection<($BlockType$SetFinder<(T)>)>
public "addFinder"(finder: $BlockType$SetFinder$Type<(T)>): void
public "getValues"(): $Collection<(T)>
/**
 * 
 * @deprecated
 */
public "getFromNBT"(name: string): T
get "type"(): $Class<(T)>
get "defaultType"(): T
get "codec"(): $Codec<(T)>
get "registryCodec"(): $Codec<($BlockTypeRegistry<(any)>)>
get "finders"(): $Collection<($BlockType$SetFinder<(T)>)>
get "values"(): $Collection<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTypeRegistry$Type<T> = ($BlockTypeRegistry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTypeRegistry_<T> = $BlockTypeRegistry$Type<(T)>;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$CaveFilter$Type" {
import {$CaveFilter, $CaveFilter$Type} from "packages/net/mehvahdjukaar/moonlight/core/misc/$CaveFilter"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$PlacementModifierType, $PlacementModifierType$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifierType"

export class $CaveFilter$Type implements $PlacementModifierType<($CaveFilter)> {

constructor()

public "codec"(): $Codec<($CaveFilter)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CaveFilter$Type$Type = ($CaveFilter$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CaveFilter$Type_ = $CaveFilter$Type$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IExtendedItem" {
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"

export interface $IExtendedItem {

 "moonlight$getClientAnimationExtension"(): any
 "moonlight$setClientAnimationExtension"(arg0: any): void
 "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
 "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}

export namespace $IExtendedItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedItem$Type = ($IExtendedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedItem_ = $IExtendedItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/utils/$SlotReference" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotReference$Empty, $SlotReference$Empty$Type} from "packages/net/mehvahdjukaar/supplementaries/common/utils/$SlotReference$Empty"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CodecMapRegistry, $CodecMapRegistry$Type} from "packages/net/mehvahdjukaar/moonlight/api/misc/$CodecMapRegistry"
import {$IQuiverEntity, $IQuiverEntity$Type} from "packages/net/mehvahdjukaar/supplementaries/api/$IQuiverEntity"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $SlotReference {

 "get"(arg0: $LivingEntity$Type): $ItemStack
 "isEmpty"(): boolean
 "getItem"(player: $LivingEntity$Type): $Item
 "getCodec"(): $Codec<(any)>
}

export namespace $SlotReference {
const EMPTY: $SlotReference$Empty
const REGISTRY: $CodecMapRegistry<($SlotReference)>
const STREAM_CODEC: $Codec<($SlotReference)>
function slot(equipmentSlot: $EquipmentSlot$Type): $SlotReference
function decode(buf: $FriendlyByteBuf$Type): $SlotReference
function encode(buf: $FriendlyByteBuf$Type, slotReference: $SlotReference$Type): void
function inv(invSlot: integer): $SlotReference
function quiver(e: $IQuiverEntity$Type): $SlotReference
function hand(pUsedHand: $InteractionHand$Type): $SlotReference
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotReference$Type = ($SlotReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotReference_ = $SlotReference$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$CogBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CogBlock extends $Block {
static readonly "POWER": $IntegerProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "isSignalSource"(state: $BlockState$Type): boolean
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "updatePower"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): void
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CogBlock$Type = ($CogBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CogBlock_ = $CogBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$CandyItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CandyItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "finishUsingItem"(stack: $ItemStack$Type, world: $Level$Type, entity: $LivingEntity$Type): $ItemStack
public static "increaseSweetTooth"(world: $Level$Type, entity: $LivingEntity$Type, amount: integer): void
public static "checkSweetTooth"(entity: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandyItem$Type = ($CandyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CandyItem_ = $CandyItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$TrappedPresentBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ILightable, $ILightable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IFireItemBehavior, $IFireItemBehavior$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/fire_behaviors/$IFireItemBehavior"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$AbstractPresentBlock, $AbstractPresentBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractPresentBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ILightable$FireSourceType, $ILightable$FireSourceType$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $TrappedPresentBlock extends $AbstractPresentBlock implements $ILightable {
static readonly "FACING": $DirectionProperty
static readonly "ON_COOLDOWN": $BooleanProperty
static readonly "SHAPE_LID": $VoxelShape
static readonly "SHAPE_OPEN": $VoxelShape
static readonly "SHAPE_CLOSED": $VoxelShape
static readonly "PACKED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(color: $DyeColor$Type, properties: $BlockBehaviour$Properties$Type)

public "lightUp"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, fireSourceType: $ILightable$FireSourceType$Type): boolean
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "triggerEvent"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pId: integer, pParam: integer): boolean
public static "getPresentBehavior"(item: $ItemLike$Type): $IFireItemBehavior
public static "registerBehavior"(pItem: $ItemLike$Type, pBehavior: $IFireItemBehavior$Type): void
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "isLitUp"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "extinguish"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
public "interactWithEntity"(level: $Level$Type, state: $BlockState$Type, projectile: $Entity$Type, pos: $BlockPos$Type): boolean
public "interactWithPlayer"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "isLitUp"(state: $BlockState$Type): boolean
public "playLightUpSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type, type: $ILightable$FireSourceType$Type): void
public "setLitUp"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, lit: boolean): void
/**
 * 
 * @deprecated
 */
public "toggleLitState"(state: $BlockState$Type, lit: boolean): $BlockState
public "playExtinguishSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type): void
public "spawnSmokeParticles"(state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): void
public "canBeExtinguishedBy"(item: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "interactWithProjectile"(level: $Level$Type, state: $BlockState$Type, projectile: $Projectile$Type, pos: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrappedPresentBlock$Type = ($TrappedPresentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrappedPresentBlock_ = $TrappedPresentBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/effects/$FlammableEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FlammableEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(duration: integer, amplifier: integer): boolean
public "isInstantenous"(): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$Type, pAmplifier: integer): void
public "applyInstantenousEffect"(pSource: $Entity$Type, pIndirectSource: $Entity$Type, pLivingEntity: $LivingEntity$Type, pAmplifier: integer, pHealth: double): void
public "addAttributeModifiers"(pLivingEntity: $LivingEntity$Type, pAttributeMap: $AttributeMap$Type, pAmplifier: integer): void
public "removeAttributeModifiers"(pLivingEntity: $LivingEntity$Type, pAttributeMap: $AttributeMap$Type, pAmplifier: integer): void
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlammableEffect$Type = ($FlammableEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlammableEffect_ = $FlammableEffect$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$DoormatBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DoormatBlock extends $WaterBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "isPossibleToRespawnInThis"(blockState: $BlockState$Type): boolean
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoormatBlock$Type = ($DoormatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoormatBlock_ = $DoormatBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$Rune" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModBlockProperties$Rune extends $Enum<($ModBlockProperties$Rune)> implements $StringRepresentable {
static readonly "A": $ModBlockProperties$Rune
static readonly "B": $ModBlockProperties$Rune
static readonly "C": $ModBlockProperties$Rune
static readonly "D": $ModBlockProperties$Rune
static readonly "E": $ModBlockProperties$Rune
static readonly "F": $ModBlockProperties$Rune
static readonly "G": $ModBlockProperties$Rune
static readonly "H": $ModBlockProperties$Rune
static readonly "I": $ModBlockProperties$Rune
static readonly "J": $ModBlockProperties$Rune
static readonly "K": $ModBlockProperties$Rune
static readonly "L": $ModBlockProperties$Rune
static readonly "M": $ModBlockProperties$Rune
static readonly "N": $ModBlockProperties$Rune
static readonly "O": $ModBlockProperties$Rune
static readonly "P": $ModBlockProperties$Rune
static readonly "Q": $ModBlockProperties$Rune
static readonly "R": $ModBlockProperties$Rune
static readonly "S": $ModBlockProperties$Rune
static readonly "T": $ModBlockProperties$Rune
static readonly "U": $ModBlockProperties$Rune
static readonly "V": $ModBlockProperties$Rune
static readonly "W": $ModBlockProperties$Rune
static readonly "X": $ModBlockProperties$Rune
static readonly "Y": $ModBlockProperties$Rune
static readonly "Z": $ModBlockProperties$Rune


public static "values"(): ($ModBlockProperties$Rune)[]
public static "valueOf"(name: string): $ModBlockProperties$Rune
public "getSerializedName"(): string
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$Rune$Type = (("a") | ("b") | ("c") | ("d") | ("e") | ("f") | ("g") | ("h") | ("i") | ("j") | ("k") | ("l") | ("m") | ("n") | ("o") | ("p") | ("q") | ("r") | ("s") | ("t") | ("u") | ("v") | ("w") | ("x") | ("y") | ("z")) | ($ModBlockProperties$Rune);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$Rune_ = $ModBlockProperties$Rune$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$KeyItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KeyItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "canApplyAtEnchantingTable"(stack: $ItemStack$Type, enchantment: $Enchantment$Type): boolean
public "getPassword"(stack: $ItemStack$Type): string
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "doesSneakBypassUse"(stack: $ItemStack$Type, world: $LevelReader$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "isBookEnchantable"(stack: $ItemStack$Type, book: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyItem$Type = ($KeyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyItem_ = $KeyItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$CustomMapData, $CustomMapData$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CustomMapData$Type<T extends $CustomMapData<(any)>> extends $Record {

constructor(id: $ResourceLocation$Type, factory: $Supplier$Type<(T)>)

public "get"(mapData: $MapItemSavedData$Type): T
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factory"(): $Supplier<(T)>
public "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$Type$Type<T> = ($CustomMapData$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapData$Type_<T> = $CustomMapData$Type$Type<(T)>;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$FluidContainerList$Category" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $FluidContainerList$Category {
static readonly "CODEC": $Codec<($FluidContainerList$Category)>


public "isEmpty"(): boolean
public "getCapacity"(): integer
public "getAmount"(): integer
public "getFilledItems"(): $List<($Item)>
public "getEmptyContainer"(): $Item
public "getEmptySound"(): $SoundEvent
public "getFirstFilled"(): $Optional<($Item)>
public "getFillSound"(): $SoundEvent
get "empty"(): boolean
get "capacity"(): integer
get "amount"(): integer
get "filledItems"(): $List<($Item)>
get "emptyContainer"(): $Item
get "emptySound"(): $SoundEvent
get "firstFilled"(): $Optional<($Item)>
get "fillSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidContainerList$Category$Type = ($FluidContainerList$Category);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidContainerList$Category_ = $FluidContainerList$Category$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$HourGlassBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $HourGlassBlock extends $WaterBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HourGlassBlock$Type = ($HourGlassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HourGlassBlock_ = $HourGlassBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$FluidContainerList" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FluidContainerList$Category, $FluidContainerList$Category$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FluidContainerList$Category"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $FluidContainerList {

constructor(categoryList: $List$Type<($FluidContainerList$Category$Type)>)
constructor()

public "getEmpty"(filledContainer: $Item$Type): $Optional<($Item)>
public "getCategories"(): $Collection<($FluidContainerList$Category)>
public "getPossibleFilled"(): $Collection<($Item)>
public "getCategoryFromEmpty"(emptyContainer: $Item$Type): $Optional<($FluidContainerList$Category)>
public "getCategoryFromFilled"(filledContainer: $Item$Type): $Optional<($FluidContainerList$Category)>
public "getFilled"(emptyContainer: $Item$Type): $Optional<($Item)>
public "getPossibleEmpty"(): $Collection<($Item)>
get "categories"(): $Collection<($FluidContainerList$Category)>
get "possibleFilled"(): $Collection<($Item)>
get "possibleEmpty"(): $Collection<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidContainerList$Type = ($FluidContainerList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidContainerList_ = $FluidContainerList$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid$TintMethod" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $SoftFluid$TintMethod extends $Enum<($SoftFluid$TintMethod)> implements $StringRepresentable {
static readonly "NO_TINT": $SoftFluid$TintMethod
static readonly "FLOWING": $SoftFluid$TintMethod
static readonly "STILL_AND_FLOWING": $SoftFluid$TintMethod
static readonly "CODEC": $Codec<($SoftFluid$TintMethod)>


public static "values"(): ($SoftFluid$TintMethod)[]
public static "valueOf"(name: string): $SoftFluid$TintMethod
public "getSerializedName"(): string
public "appliesToStill"(): boolean
public "appliesToFlowing"(): boolean
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftFluid$TintMethod$Type = (("no_tint") | ("still_and_flowing") | ("flowing")) | ($SoftFluid$TintMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoftFluid$TintMethod_ = $SoftFluid$TintMethod$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$PedestalBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ModBlockProperties$DisplayStatus, $ModBlockProperties$DisplayStatus$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$DisplayStatus"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$WorldlyContainerHolder, $WorldlyContainerHolder$Type} from "packages/net/minecraft/world/$WorldlyContainerHolder"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PedestalBlock extends $WaterBlock implements $EntityBlock, $WorldlyContainerHolder {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "ITEM_STATUS": $EnumProperty<($ModBlockProperties$DisplayStatus)>
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public static "getStatus"(level: $LevelAccessor$Type, pos: $BlockPos$Type, hasItem: boolean): $ModBlockProperties$DisplayStatus
public "getContainer"(state: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type): $WorldlyContainer
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getEnchantPowerBonus"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): float
public static "canConnectTo"(state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, dir: $Direction$Type, hasItem: boolean): boolean
public static "canHaveItemAbove"(level: $LevelAccessor$Type, pos: $BlockPos$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PedestalBlock$Type = ($PedestalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PedestalBlock_ = $PedestalBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BambooSpikesBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SoftFluidStack, $SoftFluidStack$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$Type} from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IPistonMotionReact, $IPistonMotionReact$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IPistonMotionReact"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ISoftFluidConsumer, $ISoftFluidConsumer$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ISoftFluidConsumer"
import {$IWashable, $IWashable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IWashable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BambooSpikesBlock extends $WaterBlock implements $ISoftFluidConsumer, $EntityBlock, $IWashable, $IPistonMotionReact {
static readonly "FACING": $DirectionProperty
static readonly "TIPPED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "moveTick"(movedState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, aabb: $AABB$Type, tile: $PistonMovingBlockEntity$Type): void
public "ticksWhileMoved"(): boolean
public "animateTick"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entityIn: $Entity$Type): void
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getInteractionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getAdjacentBlockPathType"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, mob: $Mob$Type, originalType: $BlockPathTypes$Type): $BlockPathTypes
public "tryAcceptingFluid"(world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, fluid: $SoftFluidStack$Type): boolean
public static "tryAddingPotion"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, potion: $Potion$Type, adder: $Entity$Type): boolean
public "getSpikeItem"(te: $BlockEntity$Type): $ItemStack
public "tryWash"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, hitVec: $Vec3$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public static "getDamageSource"(level: $Level$Type): $DamageSource
public "getBlockPathType"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, mob: $Mob$Type): $BlockPathTypes
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
/**
 * 
 * @deprecated
 */
public "tryWash"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): boolean
/**
 * 
 * @deprecated
 */
public "onMoved"(movedState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, extending: boolean, tile: $PistonMovingBlockEntity$Type): void
public "onMoved"(level: $Level$Type, pos: $BlockPos$Type, movedState: $BlockState$Type, direction: $Direction$Type, extending: boolean): void
public "moveTick"(level: $Level$Type, pos: $BlockPos$Type, movedState: $BlockState$Type, aabb: $AABB$Type, tile: $PistonMovingBlockEntity$Type): void
public "onMagnetMoved"(level: $Level$Type, blockPos: $BlockPos$Type, direction: $Direction$Type, blockState: $BlockState$Type, blockEntity: $BlockEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BambooSpikesBlock$Type = ($BambooSpikesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BambooSpikesBlock_ = $BambooSpikesBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractRopeKnotBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ModBlockProperties$PostType, $ModBlockProperties$PostType$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$PostType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$MimicBlock, $MimicBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$MimicBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$IRotatable, $IRotatable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRotatable"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractRopeKnotBlock extends $MimicBlock implements $SimpleWaterloggedBlock, $EntityBlock, $IRotatable {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "POST_TYPE": $EnumProperty<($ModBlockProperties$PostType)>
static readonly "DOWN": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "EAST": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation


public "rotate"(state: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, direction: $Rotation$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getOcclusionShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getBlockSupportShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getFluidState"(state: $BlockState$Type): $FluidState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "getSideShape"(): $VoxelShape
public static "convertToRopeKnot"(type: $ModBlockProperties$PostType$Type, state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): $BlockState
public "getRotatedState"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($BlockState)>
public "onRotated"(newState: $BlockState$Type, oldState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): void
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "rotateOverAxis"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($Direction)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "sideShape"(): $VoxelShape
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRopeKnotBlock$Type = ($AbstractRopeKnotBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRopeKnotBlock_ = $AbstractRopeKnotBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SoapItem" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SoapItem extends $Item {
static readonly "SOAP_FOOD": $FoodProperties
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(pProperties: $Item$Properties$Type)

public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "finishUsingItem"(pStack: $ItemStack$Type, pLevel: $Level$Type, entity: $LivingEntity$Type): $ItemStack
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "hasBeenEatenBefore"(player: $Player$Type, level: $Level$Type): boolean
public static "interactWithEntity"(stack: $ItemStack$Type, player: $Player$Type, target: $Entity$Type, hand: $InteractionHand$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoapItem$Type = ($SoapItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoapItem_ = $SoapItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ILightable$FireSourceType, $ILightable$FireSourceType$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ILightable {

 "lightUp"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, fireSourceType: $ILightable$FireSourceType$Type): boolean
 "extinguish"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
 "interactWithEntity"(level: $Level$Type, state: $BlockState$Type, projectile: $Entity$Type, pos: $BlockPos$Type): boolean
 "interactWithPlayer"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type): $InteractionResult
 "isLitUp"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
 "isLitUp"(state: $BlockState$Type): boolean
 "playLightUpSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type, type: $ILightable$FireSourceType$Type): void
 "setLitUp"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, lit: boolean): void
/**
 * 
 * @deprecated
 */
 "toggleLitState"(state: $BlockState$Type, lit: boolean): $BlockState
 "playExtinguishSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type): void
 "spawnSmokeParticles"(state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): void
 "canBeExtinguishedBy"(item: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
 "interactWithProjectile"(level: $Level$Type, state: $BlockState$Type, projectile: $Projectile$Type, pos: $BlockPos$Type): boolean
}

export namespace $ILightable {
const FLINT_AND_STEELS: $TagKey<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILightable$Type = ($ILightable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILightable_ = $ILightable$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$ConfettiPopperItem" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfettiPopperItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(stack: $ItemStack$Type, player: $Player$Type, entity: $LivingEntity$Type, usedHand: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfettiPopperItem$Type = ($ConfettiPopperItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfettiPopperItem_ = $ConfettiPopperItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SliceMapItem$DepthMapData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CustomMapData$Type, $CustomMapData$Type$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$CustomMapData, $CustomMapData$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CustomMapData$SimpleDirtyCounter, $CustomMapData$SimpleDirtyCounter$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$SimpleDirtyCounter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SliceMapItem$DepthMapData implements $CustomMapData<($CustomMapData$SimpleDirtyCounter)> {

constructor()

public "load"(tag: $CompoundTag$Type): void
public "set"(slice: integer): void
public "save"(tag: $CompoundTag$Type): void
public "getType"(): $CustomMapData$Type<($SliceMapItem$DepthMapData)>
public "onItemTooltip"(data: $MapItemSavedData$Type, stack: $ItemStack$Type): $Component
public "saveToUpdateTag"(tag: $CompoundTag$Type, dirtyCounter: $CustomMapData$SimpleDirtyCounter$Type): void
public "loadUpdateTag"(tag: $CompoundTag$Type): void
public "persistOnRescale"(): boolean
public "onItemUpdate"(data: $MapItemSavedData$Type, entity: $Entity$Type): boolean
public "setDirty"(data: $MapItemSavedData$Type, dirtySetter: $Consumer$Type<($CustomMapData$SimpleDirtyCounter$Type)>): void
public "persistOnCopyOrLock"(): boolean
get "type"(): $CustomMapData$Type<($SliceMapItem$DepthMapData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SliceMapItem$DepthMapData$Type = ($SliceMapItem$DepthMapData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SliceMapItem$DepthMapData_ = $SliceMapItem$DepthMapData$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SelectableContainerItem$AbstractData" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $SelectableContainerItem$AbstractData {

 "consumeSelected"(): void
 "getSelected"(): $ItemStack
 "cycle"(slotsMoved: integer): boolean
 "cycle"(): boolean
 "cycle"(clockWise: boolean): boolean
 "getContentView"(): $List<($ItemStack)>
 "getSelectedSlot"(): integer
 "removeOneStack"(): $Optional<($ItemStack)>
 "updateSelectedIfNeeded"(): void
 "getSelectedItemCount"(): integer
 "setSelectedSlot"(arg0: integer): void
 "canAcceptItem"(arg0: $ItemStack$Type): boolean
 "tryAdding"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "tryAdding"(pInsertedStack: $ItemStack$Type): $ItemStack
}

export namespace $SelectableContainerItem$AbstractData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectableContainerItem$AbstractData$Type = ($SelectableContainerItem$AbstractData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectableContainerItem$AbstractData_ = $SelectableContainerItem$AbstractData$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SusGravelBricksBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$GravelBricksBlock, $GravelBricksBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$GravelBricksBlock"

export class $SusGravelBricksBlock extends $GravelBricksBlock implements $EntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SusGravelBricksBlock$Type = ($SusGravelBricksBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SusGravelBricksBlock_ = $SusGravelBricksBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MobContainer$MobNBTData, $MobContainer$MobNBTData$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer$MobNBTData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SoftFluid, $SoftFluid$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid"
import {$MobContainer$MobNBTData$Entity, $MobContainer$MobNBTData$Entity$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer$MobNBTData$Entity"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MobContainer {

constructor(width: float, height: float, isAquarium: boolean)

public "load"(tag: $CompoundTag$Type): void
public "clear"(): void
public "isEmpty"(): boolean
public "save"(tag: $CompoundTag$Type): $CompoundTag
public "getData"(): $MobContainer$MobNBTData
public "getDisplayedMob"(): $Entity
public static "createMobHolderItemTag"(mob: $Entity$Type, blockW: float, blockH: float, bucketStack: $ItemStack$Type, isAquarium: boolean): $CompoundTag
public "tick"(pLevel: $Level$Type, pPos: $BlockPos$Type): void
public static "createEntityFromNBT"(tag: $CompoundTag$Type, id: $UUID$Type, world: $Level$Type): $Entity
public "shouldRenderWithFluid"(): $Optional<($Holder<($SoftFluid)>)>
public "onInteract"(world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResult
public static "calculateMobDimensionsForContainer"(mob: $Entity$Type, blockW: float, blockH: float, waterlogged: boolean): $Pair<(float), (float)>
public "interactWithBucket"(stack: $ItemStack$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type): boolean
public "updateLightLevel"(level: $Level$Type, pos: $BlockPos$Type): void
public static "createStaticMob"(data: $MobContainer$MobNBTData$Entity$Type, world: $Level$Type, pos: $BlockPos$Type): $Entity
get "empty"(): boolean
get "data"(): $MobContainer$MobNBTData
get "displayedMob"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobContainer$Type = ($MobContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobContainer_ = $MobContainer$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$WickerFenceBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WallSide, $WallSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WickerFenceBlock extends $WaterBlock {
static readonly "EAST_WALL": $EnumProperty<($WallSide)>
static readonly "NORTH_WALL": $EnumProperty<($WallSide)>
static readonly "SOUTH_WALL": $EnumProperty<($WallSide)>
static readonly "WEST_WALL": $EnumProperty<($WallSide)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($EnumProperty<($WallSide)>)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WickerFenceBlock$Type = ($WickerFenceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WickerFenceBlock_ = $WickerFenceBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer$MobNBTData$Entity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MobContainer$MobNBTData, $MobContainer$MobNBTData$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer$MobNBTData"

export class $MobContainer$MobNBTData$Entity extends $MobContainer$MobNBTData {
readonly "mobTag": $CompoundTag


public "getScale"(): float
get "scale"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobContainer$MobNBTData$Entity$Type = ($MobContainer$MobNBTData$Entity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobContainer$MobNBTData$Entity_ = $MobContainer$MobNBTData$Entity$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$GunpowderBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RedstoneSide, $RedstoneSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$RedstoneSide"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$LightUpBlock, $LightUpBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LightUpBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ILightable$FireSourceType, $ILightable$FireSourceType$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GunpowderBlock extends $LightUpBlock {
static readonly "NORTH": $EnumProperty<($RedstoneSide)>
static readonly "EAST": $EnumProperty<($RedstoneSide)>
static readonly "SOUTH": $EnumProperty<($RedstoneSide)>
static readonly "WEST": $EnumProperty<($RedstoneSide)>
static readonly "BURNING": $IntegerProperty
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($EnumProperty<($RedstoneSide)>)>
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "lightUp"(entity: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, fireSourceType: $ILightable$FireSourceType$Type): boolean
public "tick"(state: $BlockState$Type, world: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "animateTick"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "fallOn"(world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, height: float): void
public "onCaughtFire"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, face: $Direction$Type, igniter: $LivingEntity$Type): void
public "getFlammability"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "getFireSpreadSpeed"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "onBlockExploded"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): void
public "canSurvive"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "updateIndirectNeighbourShapes"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, var1: integer, var2: integer): void
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, neighborPos: $BlockPos$Type, moving: boolean): void
public "onPlace"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, moving: boolean): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, otherState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, otherPos: $BlockPos$Type): $BlockState
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "triggerEvent"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, eventID: integer, eventParam: integer): boolean
public static "createMiniExplosion"(world: $Level$Type, pos: $BlockPos$Type, alwaysFire: boolean): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isLitUp"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public static "canLightMeOnFire"(world: $LevelAccessor$Type, pos: $BlockPos$Type): boolean
public static "canLightMeOnFire"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "setLitUp"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, lit: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunpowderBlock$Type = ($GunpowderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunpowderBlock_ = $GunpowderBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/$StasisEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $StasisEnchantment extends $Enchantment {
readonly "category": $EnchantmentCategory

constructor()

public "canApplyAtEnchantingTable"(stack: $ItemStack$Type): boolean
public "getMaxLevel"(): integer
public "m_5975_"(enchantment: $Enchantment$Type): boolean
public "canEnchant"(stack: $ItemStack$Type): boolean
public "getMinCost"(level: integer): integer
public "getMaxCost"(level: integer): integer
public "isTradeable"(): boolean
public "isDiscoverable"(): boolean
public "isAllowedOnBooks"(): boolean
public "isTreasureOnly"(): boolean
get "maxLevel"(): integer
get "tradeable"(): boolean
get "discoverable"(): boolean
get "allowedOnBooks"(): boolean
get "treasureOnly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StasisEnchantment$Type = ($StasisEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StasisEnchantment_ = $StasisEnchantment$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IPistonMotionReact" {
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$Type} from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IPistonMotionReact {

/**
 * 
 * @deprecated
 */
 "onMoved"(movedState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, extending: boolean, tile: $PistonMovingBlockEntity$Type): void
 "onMoved"(level: $Level$Type, pos: $BlockPos$Type, movedState: $BlockState$Type, direction: $Direction$Type, extending: boolean): void
/**
 * 
 * @deprecated
 */
 "moveTick"(movedState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, aabb: $AABB$Type, tile: $PistonMovingBlockEntity$Type): void
 "moveTick"(level: $Level$Type, pos: $BlockPos$Type, movedState: $BlockState$Type, aabb: $AABB$Type, tile: $PistonMovingBlockEntity$Type): void
 "ticksWhileMoved"(): boolean
 "onMagnetMoved"(level: $Level$Type, blockPos: $BlockPos$Type, direction: $Direction$Type, blockState: $BlockState$Type, blockEntity: $BlockEntity$Type): void
}

export namespace $IPistonMotionReact {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPistonMotionReact$Type = ($IPistonMotionReact);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPistonMotionReact_ = $IPistonMotionReact$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$GoldDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $GoldDoorBlock extends $DoorBlock {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "POWERED": $BooleanProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(builder: $BlockBehaviour$Properties$Type)

public static "tryOpenDoubleDoorKey"(world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type): void
public "neighborChanged"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, blockIn: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public static "tryOpenDoubleDoor"(world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type): void
public "canBeOpened"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldDoorBlock$Type = ($GoldDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldDoorBlock_ = $GoldDoorBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AshenBasaltBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AshenBasaltBlock extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AshenBasaltBlock$Type = ($AshenBasaltBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AshenBasaltBlock_ = $AshenBasaltBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/$BombEntity$BombType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BombExplosion, $BombExplosion$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/explosion/$BombExplosion"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BombEntity$BreakingMode, $BombEntity$BreakingMode$Type} from "packages/net/mehvahdjukaar/supplementaries/common/entities/$BombEntity$BreakingMode"

export class $BombEntity$BombType extends $Enum<($BombEntity$BombType)> {
static readonly "NORMAL": $BombEntity$BombType
static readonly "BLUE": $BombEntity$BombType
static readonly "SPIKY": $BombEntity$BombType
readonly "item": $Supplier<($Item)>
readonly "itemOn": $Supplier<($Item)>


public static "values"(): ($BombEntity$BombType)[]
public static "valueOf"(name: string): $BombEntity$BombType
public "getDisplayStack"(active: boolean): $ItemStack
public "getRadius"(): double
public "afterExploded"(exp: $BombExplosion$Type, level: $Level$Type): void
public "applyStatusEffects"(entity: $LivingEntity$Type, distSq: double): void
public "breakMode"(): $BombEntity$BreakingMode
public "volume"(): float
public "isInstantlyActivated"(): boolean
public "spawnExtraParticles"(x: double, y: double, z: double, level: $Level$Type): void
get "radius"(): double
get "instantlyActivated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BombEntity$BombType$Type = (("normal") | ("spiky") | ("blue")) | ($BombEntity$BombType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BombEntity$BombType_ = $BombEntity$BombType$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$RoadSignFeature$RandomState" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $RoadSignFeature$RandomState extends $Record {
static readonly "CODEC": $Codec<($RoadSignFeature$RandomState)>


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "doubleLanternChance"(): float
public "doubleSignChance"(): float
public "trapdoorChance"(): float
public "wallLanternChance"(): float
public "stoneChance"(): float
public "stoneLanternChance"(): float
public "candleHolderChance"(): float
public "logChance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoadSignFeature$RandomState$Type = ($RoadSignFeature$RandomState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoadSignFeature$RandomState_ = $RoadSignFeature$RandomState$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$IMobContainerProvider" {
import {$MobContainer, $MobContainer$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $IMobContainerProvider {

 "getDirection"(): $Direction
 "getMobContainer"(): $MobContainer

(): $Direction
}

export namespace $IMobContainerProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMobContainerProvider$Type = ($IMobContainerProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMobContainerProvider_ = $IMobContainerProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/mixins/$AgeableListAccessor" {
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"

export interface $AgeableListAccessor {

 "invokeBodyParts"(): $Iterable<($ModelPart)>

(): $Iterable<($ModelPart)>
}

export namespace $AgeableListAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgeableListAccessor$Type = ($AgeableListAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AgeableListAccessor_ = $AgeableListAccessor$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/api/$IQuiverEntity" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IQuiverEntity {

 "supplementaries$getQuiver"(): $ItemStack
 "supplementaries$hasQuiver"(): boolean
 "supplementaries$setQuiver"(arg0: $ItemStack$Type): void
}

export namespace $IQuiverEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQuiverEntity$Type = ($IQuiverEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQuiverEntity_ = $IQuiverEntity$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$BubbleBlowerItem" {
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IFirstPersonAnimationProvider, $IFirstPersonAnimationProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$IFirstPersonAnimationProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IThirdPersonAnimationProvider, $IThirdPersonAnimationProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$IThirdPersonAnimationProvider"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BubbleBlowerItem extends $Item implements $IThirdPersonAnimationProvider, $IFirstPersonAnimationProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getUseDuration"(stack: $ItemStack$Type): integer
public "canApplyAtEnchantingTable"(stack: $ItemStack$Type, enchantment: $Enchantment$Type): boolean
public "onUseTick"(level: $Level$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseDuration: integer): void
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarColor"(stack: $ItemStack$Type): integer
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "isEnchantable"(stack: $ItemStack$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "isRepairable"(stack: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "isValidRepairItem"(toRepair: $ItemStack$Type, repair: $ItemStack$Type): boolean
public "isBookEnchantable"(stack: $ItemStack$Type, book: $ItemStack$Type): boolean
public "animateItemFirstPerson"(entity: $LivingEntity$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, matrixStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
public "poseLeftArm"<T extends $LivingEntity>(stack: $ItemStack$Type, model: $HumanoidModel$Type<(T)>, entity: T, mainHand: $HumanoidArm$Type): boolean
public "poseRightArm"<T extends $LivingEntity>(stack: $ItemStack$Type, model: $HumanoidModel$Type<(T)>, entity: T, mainHand: $HumanoidArm$Type): boolean
public "animateHands"<T extends $LivingEntity>(model: $HumanoidModel$Type<(T)>, entity: T, leftHand: boolean): void
public static "get"(target: $Item$Type): $IThirdPersonAnimationProvider
public static "attachToItem"(target: $Item$Type, object: $IThirdPersonAnimationProvider$Type): void
public "isTwoHanded"(): boolean
public "animateItemFirstPerson"(entity: $Player$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, arm: $HumanoidArm$Type, poseStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
public static "attachToItem"(target: $Item$Type, object: $IFirstPersonAnimationProvider$Type): void
get "enchantmentValue"(): integer
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleBlowerItem$Type = ($BubbleBlowerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BubbleBlowerItem_ = $BubbleBlowerItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$ISoftFluidTankProvider" {
import {$SoftFluidTank, $SoftFluidTank$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidTank"

export interface $ISoftFluidTankProvider {

 "canInteractWithSoftFluidTank"(): boolean
 "getSoftFluidTank"(): $SoftFluidTank

(): boolean
}

export namespace $ISoftFluidTankProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoftFluidTankProvider$Type = ($ISoftFluidTankProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoftFluidTankProvider_ = $ISoftFluidTankProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$JarBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$JarBlockTile, $JarBlockTile$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/tiles/$JarBlockTile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $JarBlock extends $WaterBlock implements $EntityBlock {
static readonly "SHAPE": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getBeaconColorMultiplier"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, beaconPos: $BlockPos$Type): (float)[]
public "getJarLiquidColor"(pos: $BlockPos$Type, world: $LevelReader$Type): integer
public "getJarItem"(te: $JarBlockTile$Type): $ItemStack
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JarBlock$Type = ($JarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JarBlock_ = $JarBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FrameBraceBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FrameBlock, $FrameBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FrameBlock"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $FrameBraceBlock extends $FrameBlock {
static readonly "FLIPPED": $BooleanProperty
static readonly "FRAMED_BLOCKS": $List<($Block)>
static readonly "HAS_BLOCK": $BooleanProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "OCCLUSION_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "applyRotationLock"(world: $Level$Type, blockPos: $BlockPos$Type, state: $BlockState$Type, direction: $Direction$Type, half: integer): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameBraceBlock$Type = ($FrameBraceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameBraceBlock_ = $FrameBraceBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$RopeKnotBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$AbstractRopeKnotBlock, $AbstractRopeKnotBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractRopeKnotBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IRopeConnection, $IRopeConnection$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$IRopeConnection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ModBlockProperties$PostType, $ModBlockProperties$PostType$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$PostType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RopeKnotBlock extends $AbstractRopeKnotBlock implements $IRopeConnection {
static readonly "SIDE_SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "POST_TYPE": $EnumProperty<($ModBlockProperties$PostType)>
static readonly "DOWN": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "EAST": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "canSideAcceptConnection"(state: $BlockState$Type, direction: $Direction$Type): boolean
public "updateShape"(state: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, world: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getSideShape"(): $VoxelShape
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public static "isSupportingCeiling"(upState: $BlockState$Type, pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "isSupportingCeiling"(pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public "shouldConnectToFace"(thisState: $BlockState$Type, facingState: $BlockState$Type, facingPos: $BlockPos$Type, dir: $Direction$Type, world: $LevelReader$Type): boolean
public static "canConnectDown"(downState: $BlockState$Type): boolean
get "sideShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RopeKnotBlock$Type = ($RopeKnotBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RopeKnotBlock_ = $RopeKnotBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$CrystalDisplayBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CrystalDisplayBlock extends $WaterBlock {
static readonly "POWER": $IntegerProperty
static readonly "ATTACHED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalDisplayBlock$Type = ($CrystalDisplayBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalDisplayBlock_ = $CrystalDisplayBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$PancakeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SoftFluidStack, $SoftFluidStack$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ModBlockProperties$Topping, $ModBlockProperties$Topping$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$Topping"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ISoftFluidConsumer, $ISoftFluidConsumer$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ISoftFluidConsumer"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export class $PancakeBlock extends $WaterBlock implements $ISoftFluidConsumer {
static readonly "PANCAKES": $IntegerProperty
static readonly "TOPPING": $EnumProperty<($ModBlockProperties$Topping)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "canBeReplaced"(state: $BlockState$Type, useContext: $BlockPlaceContext$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public static "setTopping"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, topping: $ModBlockProperties$Topping$Type): boolean
public "tryAcceptingFluid"(world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, fluid: $SoftFluidStack$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PancakeBlock$Type = ($PancakeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PancakeBlock_ = $PancakeBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$PulleyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IRotatable, $IRotatable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRotatable"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$ModBlockProperties$Winding, $ModBlockProperties$Winding$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$Winding"

export class $PulleyBlock extends $RotatedPillarBlock implements $EntityBlock, $IRotatable {
static readonly "TYPE": $EnumProperty<($ModBlockProperties$Winding)>
static readonly "FLIPPED": $BooleanProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getMenuProvider"(state: $BlockState$Type, blockEntity: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "windPulley"(state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, rot: $Rotation$Type, dir: $Direction$Type): boolean
public "getRotatedState"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($BlockState)>
public "onRotated"(newState: $BlockState$Type, oldState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, originalRot: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): void
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "rotateOverAxis"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($Direction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PulleyBlock$Type = ($PulleyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PulleyBlock_ = $PulleyBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer$MobNBTData" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MobContainer$MobNBTData {


public "getName"(): string
public "getFishTexture"(): integer
public "is2DFish"(): boolean
public "getFluidID"(): $ResourceLocation
get "name"(): string
get "fishTexture"(): integer
get "2DFish"(): boolean
get "fluidID"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobContainer$MobNBTData$Type = ($MobContainer$MobNBTData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobContainer$MobNBTData_ = $MobContainer$MobNBTData$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$IronGateBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$FenceGateBlock, $FenceGateBlock$Type} from "packages/net/minecraft/world/level/block/$FenceGateBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $IronGateBlock extends $FenceGateBlock implements $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "IN_WALL": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type, gold: boolean)

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getFluidState"(state: $BlockState$Type): $FluidState
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public static "messWithIronBarsState"(level: $LevelAccessor$Type, clickedPos: $BlockPos$Type, original: $BlockState$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getSoundType"(state: $BlockState$Type): $SoundType
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IronGateBlock$Type = ($IronGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IronGateBlock_ = $IronGateBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/integration/$FarmersDelightCompat$PlanterRichBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PlanterBlock, $PlanterBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$PlanterBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FarmersDelightCompat$PlanterRichBlock extends $PlanterBlock {
static readonly "EXTENDED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type, mimic: $Supplier$Type<($Block$Type)>)

public "randomTick"(state: $BlockState$Type, worldIn: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getDrops"(blockState: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmersDelightCompat$PlanterRichBlock$Type = ($FarmersDelightCompat$PlanterRichBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FarmersDelightCompat$PlanterRichBlock_ = $FarmersDelightCompat$PlanterRichBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SlingshotItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$ProjectileWeaponItem, $ProjectileWeaponItem$Type} from "packages/net/minecraft/world/item/$ProjectileWeaponItem"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IFirstPersonAnimationProvider, $IFirstPersonAnimationProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$IFirstPersonAnimationProvider"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$IThirdPersonAnimationProvider, $IThirdPersonAnimationProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$IThirdPersonAnimationProvider"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SlingshotItem extends $ProjectileWeaponItem implements $Vanishable, $IFirstPersonAnimationProvider, $IThirdPersonAnimationProvider {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getUseDuration"(stack: $ItemStack$Type): integer
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "canApplyAtEnchantingTable"(stack: $ItemStack$Type, enchantment: $Enchantment$Type): boolean
public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, entity: $LivingEntity$Type, timeLeft: integer): void
public "animateItemFirstPerson"(entity: $LivingEntity$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, matrixStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
public "getPowerForTime"(stack: $ItemStack$Type, timeLeft: float): float
public "poseLeftArm"<T extends $LivingEntity>(stack: $ItemStack$Type, model: $HumanoidModel$Type<(T)>, entity: T, mainHand: $HumanoidArm$Type): boolean
public "poseRightArm"<T extends $LivingEntity>(stack: $ItemStack$Type, model: $HumanoidModel$Type<(T)>, entity: T, mainHand: $HumanoidArm$Type): boolean
public static "getChargeDuration"(stack: $ItemStack$Type): integer
public "getChargeSound"(stack: $ItemStack$Type): $SoundEvent
public "getDefaultProjectileRange"(): integer
public static "get"(target: $Item$Type): $IFirstPersonAnimationProvider
public "animateItemFirstPerson"(entity: $Player$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, arm: $HumanoidArm$Type, poseStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
public static "attachToItem"(target: $Item$Type, object: $IFirstPersonAnimationProvider$Type): void
public static "attachToItem"(target: $Item$Type, object: $IThirdPersonAnimationProvider$Type): void
public "isTwoHanded"(): boolean
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "defaultProjectileRange"(): integer
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlingshotItem$Type = ($SlingshotItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlingshotItem_ = $SlingshotItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/explosion/$BombExplosion" {
import {$ExplosionDamageCalculator, $ExplosionDamageCalculator$Type} from "packages/net/minecraft/world/level/$ExplosionDamageCalculator"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BombEntity$BombType, $BombEntity$BombType$Type} from "packages/net/mehvahdjukaar/supplementaries/common/entities/$BombEntity$BombType"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BombExplosion extends $Explosion {
readonly "blockInteraction": $Explosion$BlockInteraction
readonly "level": $Level
readonly "x": double
readonly "y": double
readonly "z": double
 "source": $Entity
 "radius": float
 "damageSource": $DamageSource
readonly "damageCalculator": $ExplosionDamageCalculator

constructor(world: $Level$Type, entity: $Entity$Type, context: $ExplosionDamageCalculator$Type, x: double, y: double, z: double, bombType: $BombEntity$BombType$Type, interaction: $Explosion$BlockInteraction$Type)
constructor(level: $Level$Type, source: $Entity$Type, toBlowX: double, toBlowY: double, toBlowZ: double, radius: float, toBlow: $List$Type<($BlockPos$Type)>, bombType: $BombEntity$BombType$Type)

public "finalizeExplosion"(spawnParticles: boolean): void
public "explode"(): void
public "getToBlow"(): $ObjectArrayList<($BlockPos)>
public "bombType"(): $BombEntity$BombType
get "toBlow"(): $ObjectArrayList<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BombExplosion$Type = ($BombExplosion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BombExplosion_ = $BombExplosion$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$BambooSpikesTippedItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$WoodBasedBlockItem, $WoodBasedBlockItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$WoodBasedBlockItem"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BambooSpikesTippedItem extends $WoodBasedBlockItem implements $SimpleWaterloggedBlock {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(blockIn: $Block$Type, builder: $Item$Properties$Type)

public "getDefaultInstance"(): $ItemStack
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarColor"(stack: $ItemStack$Type): integer
public "getDescriptionId"(stack: $ItemStack$Type): string
public "isEnchantable"(stack: $ItemStack$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "isRepairable"(stack: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "isValidRepairItem"(toRepair: $ItemStack$Type, repair: $ItemStack$Type): boolean
public "isBookEnchantable"(stack: $ItemStack$Type, book: $ItemStack$Type): boolean
public static "isPotionValid"(potion: $Potion$Type): boolean
public static "makeSpikeItem"(potion: $Potion$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "defaultInstance"(): $ItemStack
get "enchantmentValue"(): integer
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BambooSpikesTippedItem$Type = ($BambooSpikesTippedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BambooSpikesTippedItem_ = $BambooSpikesTippedItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SpringLauncherHeadBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $SpringLauncherHeadBlock extends $DirectionalBlock {
static readonly "FACING": $DirectionProperty
static readonly "SHORT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "fallOn"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entityIn: $Entity$Type, fallDistance: float): void
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, blockIn: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "playerWillDestroy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpringLauncherHeadBlock$Type = ($SpringLauncherHeadBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpringLauncherHeadBlock_ = $SpringLauncherHeadBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MapDecorationType, $MapDecorationType$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/type/$MapDecorationType"

export class $CustomMapDecoration {

constructor(type: $MapDecorationType$Type<(any), (any)>, buffer: $FriendlyByteBuf$Type)
constructor(type: $MapDecorationType$Type<(any), (any)>, x: byte, y: byte, rot: byte, displayName: $Component$Type)

public "equals"(obj: any): boolean
public "hashCode"(): integer
public "getType"(): $MapDecorationType<(any), (any)>
public "getDisplayName"(): $Component
public "getY"(): byte
public "getX"(): byte
public "getRot"(): byte
public "setRot"(rot: byte): void
public "setX"(x: byte): void
public "setY"(y: byte): void
public "saveToBuffer"(buffer: $FriendlyByteBuf$Type): void
public "setDisplayName"(displayName: $Component$Type): void
get "type"(): $MapDecorationType<(any), (any)>
get "displayName"(): $Component
get "y"(): byte
get "x"(): byte
get "rot"(): byte
set "rot"(value: byte)
set "x"(value: byte)
set "y"(value: byte)
set "displayName"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapDecoration$Type = ($CustomMapDecoration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapDecoration_ = $CustomMapDecoration$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IRotatable" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IRotatable {

 "rotateOverAxis"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($Direction)>
 "getRotatedState"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type, arg4: $Direction$Type, arg5: $Vec3$Type): $Optional<($BlockState)>
 "onRotated"(newState: $BlockState$Type, oldState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): void

(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($Direction)>
}

export namespace $IRotatable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRotatable$Type = ($IRotatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRotatable_ = $IRotatable$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IHoldingPlayerExtension" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CustomMapData$Type, $CustomMapData$Type$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import {$CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"

export interface $IHoldingPlayerExtension {

 "moonlight$setCustomMarkersDirty"(): void
 "moonlight$setCustomDataDirty"<H extends $CustomMapData$DirtyCounter>(arg0: $CustomMapData$Type$Type<(any)>, arg1: $Consumer$Type<(H)>): void
}

export namespace $IHoldingPlayerExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHoldingPlayerExtension$Type = ($IHoldingPlayerExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHoldingPlayerExtension_ = $IHoldingPlayerExtension$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SpringLauncherArmBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $SpringLauncherArmBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "EXTENDING": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getOcclusionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpringLauncherArmBlock$Type = ($SpringLauncherArmBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpringLauncherArmBlock_ = $SpringLauncherArmBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CustomMapData$DirtyCounter {

 "isDirty"(): boolean
 "clearDirty"(): void
}

export namespace $CustomMapData$DirtyCounter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$DirtyCounter$Type = ($CustomMapData$DirtyCounter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapData$DirtyCounter_ = $CustomMapData$DirtyCounter$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$BlockPlacerItem" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockPlacerItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(pBlock: $Block$Type, pProperties: $Item$Properties$Type)

public static "get"(): $BlockPlacerItem
public "m_40610_"(pContext: $BlockPlaceContext$Type, pState: $BlockState$Type): boolean
public "getDescriptionId"(): string
public "isEdible"(): boolean
public "registerBlocks"(pBlockToItemMap: $Map$Type<($Block$Type), ($Item$Type)>, pItem: $Item$Type): void
public "getBlock"(): $Block
public "getFoodProperties"(): $FoodProperties
public "mimicGetPlacementState"(pContext: $BlockPlaceContext$Type, toPlace: $Block$Type): $BlockState
public "mimicUseOn"(pContext: $UseOnContext$Type, toPlace: $Block$Type, foodProperties: $FoodProperties$Type): $InteractionResult
public "mimicPlace"(pContext: $BlockPlaceContext$Type, toPlace: $Block$Type, overrideSound: $SoundType$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "descriptionId"(): string
get "edible"(): boolean
get "block"(): $Block
get "foodProperties"(): $FoodProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlacerItem$Type = ($BlockPlacerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPlacerItem_ = $BlockPlacerItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ISimpleBrushable" {
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ISimpleBrushable {

 "brush"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $Level$Type, arg3: $ItemStack$Type, arg4: $Player$Type, arg5: $HumanoidArm$Type, arg6: $BlockHitResult$Type, arg7: $Vec3$Type): boolean

(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $Level$Type, arg3: $ItemStack$Type, arg4: $Player$Type, arg5: $HumanoidArm$Type, arg6: $BlockHitResult$Type, arg7: $Vec3$Type): boolean
}

export namespace $ISimpleBrushable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISimpleBrushable$Type = ($ISimpleBrushable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISimpleBrushable_ = $ISimpleBrushable$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IOwnerProtected" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $IOwnerProtected {

 "getOwner"(): $UUID
 "isPublic"(): boolean
 "isOwnedBy"(player: $Player$Type): boolean
 "setOwner"(arg0: $UUID$Type): void
 "isAccessibleBy"(player: $Player$Type): boolean
 "saveOwner"(tag: $CompoundTag$Type): void
 "loadOwner"(tag: $CompoundTag$Type): void
 "isNotOwnedBy"(player: $Player$Type): boolean
}

export namespace $IOwnerProtected {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnerProtected$Type = ($IOwnerProtected);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOwnerProtected_ = $IOwnerProtected$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/set/$BlockType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockTypeRegistry, $BlockTypeRegistry$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/$BlockTypeRegistry"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $BlockType {
readonly "id": $ResourceLocation


public "toString"(): string
public "getTypeName"(): string
public "getId"(): $ResourceLocation
public "getChild"(key: string): any
public "getChildren"(): $Set<($Map$Entry<(string), (any)>)>
public "getSound"(): $SoundType
public "getNamespace"(): string
public "getAppendableIdWith"(prefix: string, suffix: string): string
public "getAppendableIdWith"(suffix: string): string
public "getTranslationKey"(): string
public "getReadableName"(): string
public "getBlockOfThis"(key: string): $Block
public "mainChild"(): $ItemLike
public "getAppendableId"(): string
public "getItemOfThis"(key: string): $Item
public "getVariantId"(postfix: string, prefix: string): string
public "getVariantId"(baseName: string, prefix: boolean): string
public "getVariantId"(baseName: string): string
public "getChildKey"(child: any): string
public static "changeType"(current: any, originalMat: $BlockType$Type, destinationMat: $BlockType$Type): any
public static "changeBlockType"(current: $Block$Type, originalMat: $BlockType$Type, destinationMat: $BlockType$Type): $Block
public static "changeItemType"(current: $Item$Type, originalMat: $BlockType$Type, destinationMat: $BlockType$Type): $Item
public "addChild"(genericName: string, obj: any): void
public "isVanilla"(): boolean
public "getRegistry"<T extends $BlockType>(): $BlockTypeRegistry<(T)>
get "typeName"(): string
get "id"(): $ResourceLocation
get "children"(): $Set<($Map$Entry<(string), (any)>)>
get "sound"(): $SoundType
get "namespace"(): string
get "translationKey"(): string
get "readableName"(): string
get "appendableId"(): string
get "vanilla"(): boolean
get "registry"(): $BlockTypeRegistry<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockType$Type = ($BlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockType_ = $BlockType$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$ISoftFluidConsumer" {
import {$SoftFluidStack, $SoftFluidStack$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ISoftFluidConsumer {

 "tryAcceptingFluid"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $SoftFluidStack$Type): boolean

(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $SoftFluidStack$Type): boolean
}

export namespace $ISoftFluidConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoftFluidConsumer$Type = ($ISoftFluidConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoftFluidConsumer_ = $ISoftFluidConsumer$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FlowerBoxBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FlowerBoxBlock extends $WaterBlock implements $EntityBlock {
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "ATTACHMENT": $EnumProperty<($AttachFace)>
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "appendHoverText"(stack: $ItemStack$Type, context: $BlockGetter$Type, tooltipComponents: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowerBoxBlock$Type = ($FlowerBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlowerBoxBlock_ = $FlowerBoxBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData" {
import {$ModelDataKey, $ModelDataKey$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ModelDataKey"
import {$ExtraModelData$Builder, $ExtraModelData$Builder$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData$Builder"

export interface $ExtraModelData {

 "get"<T>(arg0: $ModelDataKey$Type<(T)>): T
 "isEmpty"(): boolean

(arg0: $ModelDataKey$Type<(T)>): T
}

export namespace $ExtraModelData {
const EMPTY: $ExtraModelData
function builder(): $ExtraModelData$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraModelData$Type = ($ExtraModelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraModelData_ = $ExtraModelData$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SpeakerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SpeakerBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "ANTIQUE": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "triggerEvent"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, eventID: integer, eventParam: integer): boolean
public "updatePower"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): void
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeakerBlock$Type = ($SpeakerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpeakerBlock_ = $SpeakerBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/tiles/$CageBlockTile" {
import {$IMobContainerProvider, $IMobContainerProvider$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$IMobContainerProvider"
import {$MobContainer, $MobContainer$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CageBlockTile extends $BlockEntity implements $IMobContainerProvider {
 "mobContainer": $MobContainer

constructor(pos: $BlockPos$Type, state: $BlockState$Type)

public static "tick"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, tile: $CageBlockTile$Type): void
public "getDirection"(): $Direction
public "getMobContainer"(): $MobContainer
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "saveToNbt"(stack: $ItemStack$Type): void
public "m_183515_"(compound: $CompoundTag$Type): void
public "load"(compound: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
get "direction"(): $Direction
get "mobContainer"(): $MobContainer
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CageBlockTile$Type = ($CageBlockTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CageBlockTile_ = $CageBlockTile$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$GlobeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$IWashable, $IWashable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IWashable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $GlobeBlock extends $WaterBlock implements $EntityBlock, $IWashable {
static readonly "POWERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "ROTATION": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "animateTick"(stateIn: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public static "displayCurrentCoordinates"(level: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "triggerEvent"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, eventID: integer, eventParam: integer): boolean
public "updatePower"(state: $BlockState$Type, leve: $Level$Type, pos: $BlockPos$Type): void
public "tryWash"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, hitVec: $Vec3$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
/**
 * 
 * @deprecated
 */
public "tryWash"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlobeBlock$Type = ($GlobeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlobeBlock_ = $GlobeBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/tiles/$BlackboardBlockTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$BlackboardManager$Key, $BlackboardManager$Key$Type} from "packages/net/mehvahdjukaar/supplementaries/client/$BlackboardManager$Key"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ExtraModelData, $ExtraModelData$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData"
import {$IOnePlayerInteractable, $IOnePlayerInteractable$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$IOnePlayerInteractable"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IExtraModelDataProvider, $IExtraModelDataProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$IExtraModelDataProvider"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IWaxable, $IWaxable$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$IWaxable"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$IScreenProvider, $IScreenProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$IScreenProvider"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ExtraModelData$Builder, $ExtraModelData$Builder$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ModelDataKey, $ModelDataKey$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ModelDataKey"
import {$IOwnerProtected, $IOwnerProtected$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IOwnerProtected"

export class $BlackboardBlockTile extends $BlockEntity implements $IOwnerProtected, $IOnePlayerInteractable, $IScreenProvider, $IWaxable, $IExtraModelDataProvider {
static readonly "BLACKBOARD_KEY": $ModelDataKey<($BlackboardManager$Key)>

constructor(pos: $BlockPos$Type, state: $BlockState$Type)

public "getOwner"(): $UUID
public "clear"(): void
public "isEmpty"(): boolean
public "setOwner"(owner: $UUID$Type): void
public "isWaxed"(): boolean
public "getDirection"(): $Direction
public "openScreen"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): void
public "setPixel"(x: integer, y: integer, b: byte): void
public "getPixel"(xx: integer, yy: integer): byte
public "getTextureKey"(): $BlackboardManager$Key
public "refreshTextureKey"(): void
public "loadFromTag"(compound: $CompoundTag$Type): void
public static "unpackPixels"(packed: (long)[]): ((byte)[])[]
public static "packPixelsToString"(packed: (long)[]): string
public "setPixels"(pixels: ((byte)[])[]): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getPlayerWhoMayEdit"(): $UUID
public static "unpackPixelsFromString"(packed: string): (long)[]
public static "packPixelsToStringWhiteOnly"(packed: (long)[]): string
public static "unpackPixelsFromStringWhiteOnly"(packed: string): (long)[]
public "savePixels"(compound: $CompoundTag$Type): $CompoundTag
public "setWaxed"(b: boolean): void
public "afterDataPacket"(oldData: $ExtraModelData$Type): void
public "addExtraModelData"(builder: $ExtraModelData$Builder$Type): void
public static "packPixels"(pixels: ((byte)[])[]): (long)[]
public "setChanged"(): void
public "m_183515_"(compound: $CompoundTag$Type): void
public "load"(compound: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "setPlayerWhoMayEdit"(playerWhoMayEdit: $UUID$Type): void
public "tryAcceptingClientPixels"(player: $ServerPlayer$Type, pixels: ((byte)[])[]): boolean
public "isPublic"(): boolean
public "isOwnedBy"(player: $Player$Type): boolean
public "isAccessibleBy"(player: $Player$Type): boolean
public "saveOwner"(tag: $CompoundTag$Type): void
public "loadOwner"(tag: $CompoundTag$Type): void
public "isNotOwnedBy"(player: $Player$Type): boolean
public "isOtherPlayerEditing"(player: $Player$Type): boolean
public "tryOpeningEditGui"(player: $ServerPlayer$Type, pos: $BlockPos$Type, stack: $ItemStack$Type): boolean
public "isEditingPlayer"(player: $Player$Type): boolean
public "openScreen"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, direction: $Direction$Type): void
public "sendOpenGuiPacket"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hitFace: $Direction$Type): void
public "sendOpenGuiPacket"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): void
public "tryWaxing"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "getExtraModelData"(): $ExtraModelData
public "requestModelReload"(): void
public "getModelData"(): $ModelData
public "onDataPacket"(net: $Connection$Type, pkt: $ClientboundBlockEntityDataPacket$Type): void
get "owner"(): $UUID
get "empty"(): boolean
set "owner"(value: $UUID$Type)
get "waxed"(): boolean
get "direction"(): $Direction
get "textureKey"(): $BlackboardManager$Key
set "pixels"(value: ((byte)[])[])
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "playerWhoMayEdit"(): $UUID
set "waxed"(value: boolean)
get "updateTag"(): $CompoundTag
set "playerWhoMayEdit"(value: $UUID$Type)
get "public"(): boolean
get "extraModelData"(): $ExtraModelData
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackboardBlockTile$Type = ($BlackboardBlockTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackboardBlockTile_ = $BlackboardBlockTile$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$BombItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BombEntity$BombType, $BombEntity$BombType$Type} from "packages/net/mehvahdjukaar/supplementaries/common/entities/$BombEntity$BombType"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BombItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(builder: $Item$Properties$Type)
constructor(builder: $Item$Properties$Type, type: $BombEntity$BombType$Type, glint: boolean)

public "getType"(): $BombEntity$BombType
public "use"(level: $Level$Type, player: $Player$Type, handIn: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isFoil"(stack: $ItemStack$Type): boolean
public "getRarity"(stack: $ItemStack$Type): $Rarity
get "type"(): $BombEntity$BombType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BombItem$Type = ($BombItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BombItem_ = $BombItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/integration/$FarmersDelightCompat$TomatoStickBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FarmersDelightCompat$TomatoLoggedBlock, $FarmersDelightCompat$TomatoLoggedBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/integration/$FarmersDelightCompat$TomatoLoggedBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $FarmersDelightCompat$TomatoStickBlock extends $FarmersDelightCompat$TomatoLoggedBlock {
static readonly "AXIS_X": $BooleanProperty
static readonly "AXIS_Z": $BooleanProperty
static readonly "VINE_AGE": $IntegerProperty
static readonly "ROPELOGGED": $BooleanProperty
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canBeReplaced"(state: $BlockState$Type, context: $BlockPlaceContext$Type): boolean
public "getInnerBlock"(): $Block
get "innerBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmersDelightCompat$TomatoStickBlock$Type = ($FarmersDelightCompat$TomatoStickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FarmersDelightCompat$TomatoStickBlock_ = $FarmersDelightCompat$TomatoStickBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/client/$BlackboardManager$Key" {
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"

export class $BlackboardManager$Key implements $TooltipComponent {


public "equals"(another: any): boolean
public "hashCode"(): integer
public static "of"(packPixels: (long)[], glowing: boolean): $BlackboardManager$Key
public static "of"(packPixels: (long)[]): $BlackboardManager$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackboardManager$Key$Type = ($BlackboardManager$Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackboardManager$Key_ = $BlackboardManager$Key$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$DirectionalSlabBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$SlabBlock, $SlabBlock$Type} from "packages/net/minecraft/world/level/block/$SlabBlock"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"

export class $DirectionalSlabBlock extends $SlabBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "TYPE": $EnumProperty<($SlabType)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionalSlabBlock$Type = ($DirectionalSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionalSlabBlock_ = $DirectionalSlabBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SpringLauncherBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SpringLauncherBlock extends $Block {
static readonly "FACING": $DirectionProperty
static readonly "EXTENDED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public "getPistonPushReaction"(state: $BlockState$Type): $PushReaction
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpringLauncherBlock$Type = ($SpringLauncherBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpringLauncherBlock_ = $SpringLauncherBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$CrankBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $CrankBlock extends $WaterBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWER": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "activate"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, ccw: boolean): void
public "animateTick"(stateIn: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "getDirectSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "isSignalSource"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, pathType: $PathComputationType$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "triggerEvent"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, id: integer, param: integer): boolean
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrankBlock$Type = ($CrankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrankBlock_ = $CrankBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/mixins/$LivingEntityAccessor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $LivingEntityAccessor {

 "setUseItem"(arg0: $ItemStack$Type): void
 "invokeShouldDropLoot"(): boolean
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$Type = ($LivingEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAccessor_ = $LivingEntityAccessor$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$RopeBuntingBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IWashable, $IWashable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IWashable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ModBlockProperties$Bunting, $ModBlockProperties$Bunting$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$Bunting"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$AbstractRopeBlock, $AbstractRopeBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractRopeBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IRotatable, $IRotatable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRotatable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RopeBuntingBlock extends $AbstractRopeBlock implements $EntityBlock, $IRotatable, $IWashable {
static readonly "NORTH": $EnumProperty<($ModBlockProperties$Bunting)>
static readonly "SOUTH": $EnumProperty<($ModBlockProperties$Bunting)>
static readonly "WEST": $EnumProperty<($ModBlockProperties$Bunting)>
static readonly "EAST": $EnumProperty<($ModBlockProperties$Bunting)>
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "FLIP_TILE": $BooleanProperty
static readonly "HORIZONTAL_FACING_TO_PROPERTY_MAP": $Map<($Direction), ($EnumProperty<($ModBlockProperties$Bunting)>)>
readonly "buntingToRope": $Map<($BlockState), ($BlockState)>
static readonly "COLLISION_SHAPE": $VoxelShape
static readonly "KNOT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "rotate"(state: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, direction: $Rotation$Type): $BlockState
public "hasConnection"(dir: $Direction$Type, state: $BlockState$Type): boolean
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public static "fromRope"(state: $BlockState$Type): $BlockState
public static "fromRope"(state: $BlockState$Type, hit: $BlockHitResult$Type): $BlockState
public "tryWash"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, hitVec: $Vec3$Type): boolean
public "rotateOverAxis"(state: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($Direction)>
public "getRotatedState"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($BlockState)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public static "toRope"(state: $BlockState$Type): $BlockState
public "popItem"(level: $Level$Type, pos: $BlockPos$Type, stack: $ItemStack$Type, dir: $Direction$Type): void
public static "canSupportBunting"(state: $BlockState$Type, index: integer): boolean
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setConnection"(dir: $Direction$Type, state: $BlockState$Type, value: boolean): $BlockState
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "onRotated"(newState: $BlockState$Type, oldState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): void
/**
 * 
 * @deprecated
 */
public "tryWash"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "isSupportingCeiling"(upState: $BlockState$Type, pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "isSupportingCeiling"(pos: $BlockPos$Type, world: $LevelReader$Type): boolean
public static "canConnectDown"(downState: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RopeBuntingBlock$Type = ($RopeBuntingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RopeBuntingBlock_ = $RopeBuntingBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$FoodProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FoodProvider {
static readonly "CODEC": $Codec<($FoodProvider)>
static readonly "EMPTY": $FoodProvider
static readonly "CUSTOM_PROVIDERS": $Map<($Item), ($FoodProvider)>


public "isEmpty"(): boolean
public static "create"(item: $Item$Type, divider: integer): $FoodProvider
public "consume"(player: $Player$Type, world: $Level$Type, nbtApplier: $Consumer$Type<($ItemStack$Type)>): boolean
public "getFood"(): $Item
public "getDivider"(): integer
get "empty"(): boolean
get "food"(): $Item
get "divider"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodProvider$Type = ($FoodProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodProvider_ = $FoodProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/tiles/$JarBlockTile" {
import {$MobContainer, $MobContainer$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$MobContainer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ExtraModelData, $ExtraModelData$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$IExtraModelDataProvider, $IExtraModelDataProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$IExtraModelDataProvider"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemDisplayTile, $ItemDisplayTile$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ItemDisplayTile"
import {$IMobContainerProvider, $IMobContainerProvider$Type} from "packages/net/mehvahdjukaar/supplementaries/common/misc/mob_container/$IMobContainerProvider"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$SoftFluidTank, $SoftFluidTank$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidTank"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SoftFluid, $SoftFluid$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid"
import {$ExtraModelData$Builder, $ExtraModelData$Builder$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ModelDataKey, $ModelDataKey$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ModelDataKey"
import {$ISoftFluidTankProvider, $ISoftFluidTankProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ISoftFluidTankProvider"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $JarBlockTile extends $ItemDisplayTile implements $IMobContainerProvider, $ISoftFluidTankProvider, $IExtraModelDataProvider {
static readonly "FLUID": $ModelDataKey<($ResourceKey<($SoftFluid)>)>
static readonly "FILL_LEVEL": $ModelDataKey<(float)>
readonly "mobContainer": $MobContainer
readonly "fluidHolder": $SoftFluidTank
static readonly "LOOT_TABLE_TAG": string
static readonly "LOOT_TABLE_SEED_TAG": string

constructor(pos: $BlockPos$Type, state: $BlockState$Type)

public static "tick"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, tile: $JarBlockTile$Type): void
public "isFull"(): boolean
public "getDirection"(): $Direction
public "handleExtractItem"(player: $Player$Type, hand: $InteractionHand$Type): boolean
public "resetHolders"(): void
public "tryAddingItem"(itemstack: $ItemStack$Type): boolean
public "tryAddingItem"(stack: $ItemStack$Type, player: $Player$Type, handIn: $InteractionHand$Type): boolean
public "getMobContainer"(): $MobContainer
public "isPonyJar"(): boolean
public "canInteractWithSoftFluidTank"(): boolean
public "extractItem"(): $ItemStack
public "getSoftFluidTank"(): $SoftFluidTank
public "canPlaceItem"(index: integer, stack: $ItemStack$Type): boolean
public "m_6820_"(): $Component
public "canTakeItemThroughFace"(index: integer, stack: $ItemStack$Type, direction: $Direction$Type): boolean
public "canPlaceItemThroughFace"(index: integer, stack: $ItemStack$Type, direction: $Direction$Type): boolean
public "hasContent"(): boolean
public "updateTileOnInventoryChanged"(): void
public "updateClientVisualsOnLoad"(): void
public "addExtraModelData"(builder: $ExtraModelData$Builder$Type): void
public "m_183515_"(tag: $CompoundTag$Type): void
public "load"(compound: $CompoundTag$Type): void
public "handleInteraction"(player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, pos: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
public "getExtraModelData"(): $ExtraModelData
public "afterDataPacket"(oldData: $ExtraModelData$Type): void
public "requestModelReload"(): void
public "getModelData"(): $ModelData
public "onDataPacket"(net: $Connection$Type, pkt: $ClientboundBlockEntityDataPacket$Type): void
public "getPersistentData"(): $CompoundTag
public "onChunkUnloaded"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "tryClear"(arg0: any): void
get "full"(): boolean
get "direction"(): $Direction
get "mobContainer"(): $MobContainer
get "ponyJar"(): boolean
get "softFluidTank"(): $SoftFluidTank
get "extraModelData"(): $ExtraModelData
get "modelData"(): $ModelData
get "persistentData"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JarBlockTile$Type = ($JarBlockTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JarBlockTile_ = $JarBlockTile$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement" {
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockPlacerItem, $BlockPlacerItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$BlockPlacerItem"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"

export class $AdditionalItemPlacement {

constructor(placeable: $Block$Type)

public "overrideGetPlacementState"(pContext: $BlockPlaceContext$Type): $BlockState
public "overrideUpdatePlacementContext"(context: $BlockPlaceContext$Type): $BlockPlaceContext
public "overrideUseOn"(pContext: $UseOnContext$Type, foodProperties: $FoodProperties$Type): $InteractionResult
public "overridePlace"(pContext: $BlockPlaceContext$Type): $InteractionResult
public "getPlacedBlock"(): $Block
public static "getBlockPlacer"(): $BlockPlacerItem
get "placedBlock"(): $Block
get "blockPlacer"(): $BlockPlacerItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdditionalItemPlacement$Type = ($AdditionalItemPlacement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdditionalItemPlacement_ = $AdditionalItemPlacement$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IMapDataPacketExtension" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MapItemSavedData$MapPatch, $MapItemSavedData$MapPatch$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData$MapPatch"
import {$CustomMapDecoration, $CustomMapDecoration$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $IMapDataPacketExtension {

 "moonlight$sendCustomDecorations"(arg0: $Collection$Type<($CustomMapDecoration$Type)>): void
 "moonlight$getDimension"(): $ResourceKey<($Level)>
 "moonlight$sendCustomMapDataTag"(arg0: $CompoundTag$Type): void
 "moonlight$getColorPatch"(): $MapItemSavedData$MapPatch
 "moonlight$getCustomMapDataTag"(): $CompoundTag
}

export namespace $IMapDataPacketExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMapDataPacketExtension$Type = ($IMapDataPacketExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMapDataPacketExtension_ = $IMapDataPacketExtension$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CustomMapDecoration, $CustomMapDecoration$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$MapDecorationType, $MapDecorationType$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/type/$MapDecorationType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MapBlockMarker<D extends $CustomMapDecoration> {
static readonly "HAS_SMALL_TEXTURE_FLAG": integer


public "getName"(): $Component
public "equals"(o: any): boolean
public "hashCode"(): integer
public "setName"(name: $Component$Type): void
public "getType"(): $MapDecorationType<(D), (any)>
public "getFlags"(): integer
public "createDecorationFromMarker"(data: $MapItemSavedData$Type): D
public "getPos"(): $BlockPos
public "saveToNBT"(): $CompoundTag
/**
 * 
 * @deprecated
 */
public "saveToNBT"(compound: $CompoundTag$Type): $CompoundTag
public "shouldRefresh"(): boolean
public "setPersistent"(persistent: boolean): void
public "getMarkerId"(): string
public "shouldSave"(): boolean
public "getRotation"(): float
public "hasFlag"(flag: integer): boolean
public "getTypeId"(): string
public "setPos"(pos: $BlockPos$Type): void
public "loadFromNBT"(compound: $CompoundTag$Type): void
public "setRotation"(rot: integer): void
get "name"(): $Component
set "name"(value: $Component$Type)
get "type"(): $MapDecorationType<(D), (any)>
get "flags"(): integer
get "pos"(): $BlockPos
set "persistent"(value: boolean)
get "markerId"(): string
get "rotation"(): float
get "typeId"(): string
set "pos"(value: $BlockPos$Type)
set "rotation"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapBlockMarker$Type<D> = ($MapBlockMarker<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapBlockMarker_<D> = $MapBlockMarker$Type<(D)>;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/events/$AfterLanguageLoadEvent" {
import {$LangBuilder, $LangBuilder$Type} from "packages/net/mehvahdjukaar/moonlight/api/resources/assets/$LangBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SimpleEvent, $SimpleEvent$Type} from "packages/net/mehvahdjukaar/moonlight/api/events/$SimpleEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AfterLanguageLoadEvent implements $SimpleEvent {

constructor(lines: $Map$Type<(string), (string)>, info: $List$Type<(string)>)

public "addEntry"(key: string, translation: string): void
public "isDefault"(): boolean
public "getEntry"(key: string): string
public "addEntries"(builder: $LangBuilder$Type): void
get "default"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AfterLanguageLoadEvent$Type = ($AfterLanguageLoadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AfterLanguageLoadEvent_ = $AfterLanguageLoadEvent$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/fluids/$FlammableLiquidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ILightable, $ILightable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FiniteLiquidBlock, $FiniteLiquidBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/fluids/$FiniteLiquidBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ILightable$FireSourceType, $ILightable$FireSourceType$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FlammableLiquidBlock extends $FiniteLiquidBlock implements $ILightable {
static readonly "AGE": $IntegerProperty
readonly "interactionShapes": ($VoxelShape)[]
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "MISSING_LEVELS": $IntegerProperty
readonly "maxLevel": integer
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(supplier: $Supplier$Type<(any)>, arg: $BlockBehaviour$Properties$Type, baseLight: integer)

public "lightUp"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, level: $LevelAccessor$Type, fireSourceType: $ILightable$FireSourceType$Type): boolean
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
public "onProjectileHit"(level: $Level$Type, state: $BlockState$Type, pHit: $BlockHitResult$Type, projectile: $Projectile$Type): void
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getInteractionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "onCaughtFire"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, face: $Direction$Type, igniter: $LivingEntity$Type): void
public "getFireSpreadSpeed"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type): integer
public "getLightBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "onPlace"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, moving: boolean): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getAdjacentBlockPathType"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, mob: $Mob$Type, originalType: $BlockPathTypes$Type): $BlockPathTypes
public "getBlockPathType"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, mob: $Mob$Type): $BlockPathTypes
public "propagatesSkylightDown"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "initializeClient"(consumer: $Consumer$Type<(any)>): void
public "isLitUp"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public static "shouldNotHaveFire"(state: $BlockState$Type, pos: $BlockPos$Type, levelAccessor: $LevelAccessor$Type): boolean
public "setLitUp"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, lit: boolean): void
public "extinguish"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
public "interactWithEntity"(level: $Level$Type, state: $BlockState$Type, projectile: $Entity$Type, pos: $BlockPos$Type): boolean
public "interactWithPlayer"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "isLitUp"(state: $BlockState$Type): boolean
public "playLightUpSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type, type: $ILightable$FireSourceType$Type): void
/**
 * 
 * @deprecated
 */
public "toggleLitState"(state: $BlockState$Type, lit: boolean): $BlockState
public "playExtinguishSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type): void
public "spawnSmokeParticles"(state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): void
public "canBeExtinguishedBy"(item: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "interactWithProjectile"(level: $Level$Type, state: $BlockState$Type, projectile: $Projectile$Type, pos: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlammableLiquidBlock$Type = ($FlammableLiquidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlammableLiquidBlock_ = $FlammableLiquidBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AwningBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IColored, $IColored$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IColored"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $AwningBlock extends $WaterBlock implements $IColored {
static readonly "FACING": $DirectionProperty
static readonly "BOTTOM": $BooleanProperty
static readonly "SLANTED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(color: $DyeColor$Type, properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "updateEntityAfterFallOn"(level: $BlockGetter$Type, entity: $Entity$Type): void
public "stepOn"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $Entity$Type): void
public "fallOn"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, fallDistance: float): void
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getInteractionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getBlockSupportShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "canBeReplaced"(state: $BlockState$Type, fluid: $Fluid$Type): boolean
public "skipRendering"(state: $BlockState$Type, adjacentBlockState: $BlockState$Type, side: $Direction$Type): boolean
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public static "getNormalVector"(state: $BlockState$Type): $Vector3f
public "supportsBlankColor"(): boolean
public "getColor"(): $DyeColor
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "changeItemColor"(color: $DyeColor$Type): $Item
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AwningBlock$Type = ($AwningBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AwningBlock_ = $AwningBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ILightable$FireSourceType {

 "play"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): void

(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): void
}

export namespace $ILightable$FireSourceType {
const FLINT_AND_STEEL: $ILightable$FireSourceType
const FIRE_CHANGE: $ILightable$FireSourceType
const FLAMING_ARROW: $ILightable$FireSourceType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILightable$FireSourceType$Type = ($ILightable$FireSourceType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILightable$FireSourceType_ = $ILightable$FireSourceType$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$BlockTypeBasedBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FuelBlockItem, $FuelBlockItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$FuelBlockItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockType, $BlockType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/$BlockType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockTypeBasedBlockItem<T extends $BlockType> extends $FuelBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(pBlock: $Block$Type, pProperties: $Item$Properties$Type, blockType: T, burnTime: $Supplier$Type<(integer)>)
constructor(pBlock: $Block$Type, pProperties: $Item$Properties$Type, blockType: T)

public "getBlockType"(): T
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "blockType"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTypeBasedBlockItem$Type<T> = ($BlockTypeBasedBlockItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTypeBasedBlockItem_<T> = $BlockTypeBasedBlockItem$Type<(T)>;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/set/wood/$WoodType" {
import {$WoodType as $WoodType$0, $WoodType$Type as $WoodType$0$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$BlockType, $BlockType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/$BlockType"

export class $WoodType extends $BlockType {
static readonly "CODEC": $Codec<($WoodType)>
readonly "planks": $Block
readonly "log": $Block
readonly "id": $ResourceLocation

constructor(id: $ResourceLocation$Type, baseBlock: $Block$Type, logBlock: $Block$Type)

public "initializeChildrenItems"(): void
public "initializeChildrenBlocks"(): void
public "toVanilla"(): $WoodType$0
public "getTranslationKey"(): string
public "mainChild"(): $ItemLike
public "canBurn"(): boolean
public "toVanillaOrOak"(): $WoodType$0
public "getTexturePath"(): string
public "copyProperties"(): $BlockBehaviour$Properties
public "getColor"(): $MapColor
get "translationKey"(): string
get "texturePath"(): string
get "color"(): $MapColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodType$Type = ($WoodType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodType_ = $WoodType$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BlazeRodBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$StickBlock, $StickBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$StickBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlazeRodBlock extends $StickBlock {
static readonly "AXIS_X": $BooleanProperty
static readonly "AXIS_Y": $BooleanProperty
static readonly "AXIS_Z": $BooleanProperty
static readonly "AXIS2PROPERTY": $Map<($Direction$Axis), ($BooleanProperty)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "animateTick"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "stepOn"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazeRodBlock$Type = ($BlazeRodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazeRodBlock_ = $BlazeRodBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FlaxBaleBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FlaxBaleBlock extends $Block {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "fallOn"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, height: float): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlaxBaleBlock$Type = ($FlaxBaleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlaxBaleBlock_ = $FlaxBaleBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/client/$IScreenProvider" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IScreenProvider {

/**
 * 
 * @deprecated
 */
 "openScreen"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
 "openScreen"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, direction: $Direction$Type): void
 "sendOpenGuiPacket"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hitFace: $Direction$Type): void
 "sendOpenGuiPacket"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): void

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
}

export namespace $IScreenProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenProvider$Type = ($IScreenProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenProvider_ = $IScreenProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$MovingSlidyBlockSource" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $MovingSlidyBlockSource extends $DirectionalBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "getRenderShape"(state: $BlockState$Type): $RenderShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovingSlidyBlockSource$Type = ($MovingSlidyBlockSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MovingSlidyBlockSource_ = $MovingSlidyBlockSource$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SconceLeverBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SconceWallBlock, $SconceWallBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SconceWallBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SimpleParticleType, $SimpleParticleType$Type} from "packages/net/minecraft/core/particles/$SimpleParticleType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ILightable$FireSourceType, $ILightable$FireSourceType$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SconceLeverBlock extends $SconceWallBlock {
static readonly "POWERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type, particleData: $Supplier$Type<($SimpleParticleType$Type)>)

public "lightUp"(entity: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, fireSourceType: $ILightable$FireSourceType$Type): boolean
public "animateTick"(stateIn: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "getDirectSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "extinguish"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
public "isSignalSource"(state: $BlockState$Type): boolean
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "setPowered"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SconceLeverBlock$Type = ($SconceLeverBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SconceLeverBlock_ = $SconceLeverBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$ModStairBlock" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StairBlock, $StairBlock$Type} from "packages/net/minecraft/world/level/block/$StairBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ModStairBlock extends $StairBlock {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(baseBlock: $Supplier$Type<($Block$Type)>, settings: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModStairBlock$Type = ($ModStairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModStairBlock_ = $ModStairBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$TimberFrameItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$FuelBlockItem, $FuelBlockItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$FuelBlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TimberFrameItem extends $FuelBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(block: $Block$Type, properties: $Item$Properties$Type, burnTicks: integer)
constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimberFrameItem$Type = ($TimberFrameItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimberFrameItem_ = $TimberFrameItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$RelayerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $RelayerBlock extends $DirectionalBlock {
static readonly "POWER": $IntegerProperty
static readonly "POWERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, randomSource: $RandomSource$Type): void
public "getSignal"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type): integer
public "getDirectSignal"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type): integer
public "canConnectRedstone"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
public "isSignalSource"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, neighborPos: $BlockPos$Type, movedByPiston: boolean): void
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelayerBlock$Type = ($RelayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelayerBlock_ = $RelayerBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$Winding" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModBlockProperties$Winding extends $Enum<($ModBlockProperties$Winding)> implements $StringRepresentable {
static readonly "NONE": $ModBlockProperties$Winding
static readonly "CHAIN": $ModBlockProperties$Winding
static readonly "ROPE": $ModBlockProperties$Winding


public static "values"(): ($ModBlockProperties$Winding)[]
public static "valueOf"(name: string): $ModBlockProperties$Winding
public "getSerializedName"(): string
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$Winding$Type = (("chain") | ("rope") | ("none")) | ($ModBlockProperties$Winding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$Winding_ = $ModBlockProperties$Winding$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$DispenserMinecartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DispenserMinecartItem extends $Item {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(pProperties: $Item$Properties$Type)

public "useOn"(pContext: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserMinecartItem$Type = ($DispenserMinecartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DispenserMinecartItem_ = $DispenserMinecartItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LunchBoxBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $LunchBoxBlock extends $WaterBlock implements $EntityBlock {
static readonly "HANGING": $BooleanProperty
static readonly "OPEN": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): integer
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunchBoxBlock$Type = ($LunchBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunchBoxBlock_ = $LunchBoxBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/events/$IFireConsumeBlockEvent" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleEvent, $SimpleEvent$Type} from "packages/net/mehvahdjukaar/moonlight/api/events/$SimpleEvent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IFireConsumeBlockEvent extends $SimpleEvent {

 "getState"(): $BlockState
 "getFinalState"(): $BlockState
 "getLevel"(): $LevelAccessor
 "getAge"(): integer
 "getPos"(): $BlockPos
 "getFace"(): $Direction
 "setFinalState"(arg0: $BlockState$Type): void
 "getChance"(): integer
}

export namespace $IFireConsumeBlockEvent {
function create(pos: $BlockPos$Type, level: $Level$Type, state: $BlockState$Type, chance: integer, age: integer, face: $Direction$Type): $IFireConsumeBlockEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFireConsumeBlockEvent$Type = ($IFireConsumeBlockEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFireConsumeBlockEvent_ = $IFireConsumeBlockEvent$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$GoldTrapdoorBlock" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $GoldTrapdoorBlock extends $TrapDoorBlock {
static readonly "OPEN": $BooleanProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "neighborChanged"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, blockIn: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "canBeOpened"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldTrapdoorBlock$Type = ($GoldTrapdoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldTrapdoorBlock_ = $GoldTrapdoorBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/client/model/$IExtraModelDataProvider" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$ExtraModelData, $ExtraModelData$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IForgeBlockEntity, $IForgeBlockEntity$Type} from "packages/net/minecraftforge/common/extensions/$IForgeBlockEntity"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ExtraModelData$Builder, $ExtraModelData$Builder$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/model/$ExtraModelData$Builder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IExtraModelDataProvider extends $IForgeBlockEntity {

/**
 * 
 * @deprecated
 */
 "getExtraModelData"(): $ExtraModelData
 "afterDataPacket"(oldData: $ExtraModelData$Type): void
 "addExtraModelData"(builder: $ExtraModelData$Builder$Type): void
 "requestModelReload"(): void
 "getModelData"(): $ModelData
 "onDataPacket"(net: $Connection$Type, pkt: $ClientboundBlockEntityDataPacket$Type): void
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "getRenderBoundingBox"(): $AABB
 "requestModelDataUpdate"(): void
 "onLoad"(): void
 "hasCustomOutlineRendering"(arg0: $Player$Type): boolean
 "getPersistentData"(): $CompoundTag
 "onChunkUnloaded"(): void
 "handleUpdateTag"(arg0: $CompoundTag$Type): void
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IExtraModelDataProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtraModelDataProvider$Type = ($IExtraModelDataProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtraModelDataProvider_ = $IExtraModelDataProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$BrainAccessor" {
import {$Behavior, $Behavior$Type} from "packages/net/minecraft/world/entity/ai/behavior/$Behavior"
import {$SensorType, $SensorType$Type} from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import {$Sensor, $Sensor$Type} from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import {$Activity, $Activity$Type} from "packages/net/minecraft/world/entity/schedule/$Activity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $BrainAccessor<E extends $LivingEntity> {

 "getAvailableBehaviorsByPriority"(): $Map<(integer), ($Map<($Activity), ($Set<($Behavior<(any)>)>)>)>
 "getSensors"(): $Map<($SensorType<(any)>), ($Sensor<(any)>)>
}

export namespace $BrainAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainAccessor$Type<E> = ($BrainAccessor<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrainAccessor_<E> = $BrainAccessor$Type<(E)>;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$EndLampBlock" {
import {$ModBlockProperties$Rune, $ModBlockProperties$Rune$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$Rune"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $EndLampBlock extends $Block {
static readonly "RUNE": $EnumProperty<($ModBlockProperties$Rune)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndLampBlock$Type = ($EndLampBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndLampBlock_ = $EndLampBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$BuntingItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BuntingItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public static "setColor"(item: $ItemStack$Type, color: $DyeColor$Type): void
public "getDefaultInstance"(): $ItemStack
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "getDescriptionId"(stack: $ItemStack$Type): string
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public static "getColored"(color: $DyeColor$Type): $ItemStack
public static "getColor"(item: $ItemStack$Type): $DyeColor
get "defaultInstance"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuntingItem$Type = ($BuntingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuntingItem_ = $BuntingItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/fire_behaviors/$IFireItemBehavior" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IFireItemBehavior {

 "fire"(stack: $ItemStack$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, fireOffset: float, direction: $Vec3$Type, power: float, inaccuracy: integer, owner: $Player$Type): boolean
 "fire"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type, arg2: $Vec3$Type, arg3: $Vec3$Type, arg4: float, arg5: integer, arg6: $Player$Type): boolean

(stack: $ItemStack$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, fireOffset: float, direction: $Vec3$Type, power: float, inaccuracy: integer, owner: $Player$Type): boolean
}

export namespace $IFireItemBehavior {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFireItemBehavior$Type = ($IFireItemBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFireItemBehavior_ = $IFireItemBehavior$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LockBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $LockBlock extends $Block implements $EntityBlock {
static readonly "POWERED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "activate"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): void
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "isSignalSource"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockBlock$Type = ($LockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockBlock_ = $LockBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid$Builder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FluidContainerList, $FluidContainerList$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FluidContainerList"
import {$FoodProvider, $FoodProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$FoodProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SoftFluid, $SoftFluid$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid"
import {$SoftFluid$TintMethod, $SoftFluid$TintMethod$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluid$TintMethod"

export class $SoftFluid$Builder {

constructor(stillTexture: $ResourceLocation$Type, flowingTexture: $ResourceLocation$Type)
constructor(fluid: $Fluid$Type)

public "build"(): $SoftFluid
public "color"(tintColor: integer): $SoftFluid$Builder
public "bottle"(item: $Item$Type): $SoftFluid$Builder
public "bowl"(item: $Item$Type): $SoftFluid$Builder
/**
 * 
 * @deprecated
 */
public "fromMod"(s: string): $SoftFluid$Builder
public "onlyFlowingTinted"(): $SoftFluid$Builder
public "addEqFluid"(fluid: $Fluid$Type): $SoftFluid$Builder
public "tinted"(): $SoftFluid$Builder
public "noTint"(): $SoftFluid$Builder
public "food"(item: $Item$Type, foodDivider: integer): $SoftFluid$Builder
public "food"(item: $Item$Type): $SoftFluid$Builder
public "food"(foodProvider: $FoodProvider$Type): $SoftFluid$Builder
public "luminosity"(luminosity: integer): $SoftFluid$Builder
public "bucket"(item: $Item$Type): $SoftFluid$Builder
public "containers"(containerList: $FluidContainerList$Type): $SoftFluid$Builder
/**
 * 
 * @deprecated
 */
public "translationKey"(translationKey: string): $SoftFluid$Builder
public "textures"(still: $ResourceLocation$Type, flow: $ResourceLocation$Type): $SoftFluid$Builder
public "stew"(item: $Item$Type): $SoftFluid$Builder
public "emptyHandContainerItem"(filledItem: $Item$Type, itemCapacity: integer): $SoftFluid$Builder
public "translation"(component: $Component$Type): $SoftFluid$Builder
public "containerItem"(filledItem: $Item$Type, emptyItem: $Item$Type, itemCapacity: integer, fillSound: $SoundEvent$Type, emptySound: $SoundEvent$Type): $SoftFluid$Builder
public "containerItem"(filledItem: $Item$Type, emptyItem: $Item$Type, itemCapacity: integer): $SoftFluid$Builder
public "drink"(item: $Item$Type): $SoftFluid$Builder
public "emissivity"(emissivity: integer): $SoftFluid$Builder
public "tintMethod"(tint: $SoftFluid$TintMethod$Type): $SoftFluid$Builder
public "copyTexturesFrom"(fluidRes: string): $SoftFluid$Builder
public "copyTexturesFrom"(fluidRes: $ResourceLocation$Type): $SoftFluid$Builder
public "keepNBTFromItem"(...NBTkey: (string)[]): $SoftFluid$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftFluid$Builder$Type = ($SoftFluid$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoftFluid$Builder_ = $SoftFluid$Builder$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$NetheriteTrapdoorBlock" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILavaAndWaterLoggable, $ILavaAndWaterLoggable$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ILavaAndWaterLoggable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $NetheriteTrapdoorBlock extends $TrapDoorBlock implements $ILavaAndWaterLoggable, $EntityBlock {
static readonly "LAVALOGGED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(p_204510_1_: $BlockGetter$Type, p_204510_2_: $BlockPos$Type, p_204510_3_: $BlockState$Type, p_204510_4_: $Fluid$Type): boolean
public "placeLiquid"(p_204509_1_: $LevelAccessor$Type, p_204509_2_: $BlockPos$Type, p_204509_3_: $BlockState$Type, p_204509_4_: $FluidState$Type): boolean
public "pickupBlock"(pLevel: $LevelAccessor$Type, pPos: $BlockPos$Type, pState: $BlockState$Type): $ItemStack
public "getFluidState"(state: $BlockState$Type): $FluidState
public "neighborChanged"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, blockIn: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "updateShape"(pState: $BlockState$Type, direction: $Direction$Type, pFacingState: $BlockState$Type, pLevel: $LevelAccessor$Type, pCurrentPos: $BlockPos$Type, pFacingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getSoundType"(state: $BlockState$Type): $SoundType
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetheriteTrapdoorBlock$Type = ($NetheriteTrapdoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetheriteTrapdoorBlock_ = $NetheriteTrapdoorBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$IRopeConnection" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IRopeConnection {

 "shouldConnectToFace"(thisState: $BlockState$Type, facingState: $BlockState$Type, facingPos: $BlockPos$Type, dir: $Direction$Type, world: $LevelReader$Type): boolean
 "canSideAcceptConnection"(arg0: $BlockState$Type, arg1: $Direction$Type): boolean

(upState: $BlockState$Type, pos: $BlockPos$Type, world: $LevelReader$Type): boolean
}

export namespace $IRopeConnection {
function isSupportingCeiling(upState: $BlockState$Type, pos: $BlockPos$Type, world: $LevelReader$Type): boolean
function isSupportingCeiling(pos: $BlockPos$Type, world: $LevelReader$Type): boolean
function canConnectDown(downState: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRopeConnection$Type = ($IRopeConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRopeConnection_ = $IRopeConnection$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$FluteItem" {
import {$HeadedModel, $HeadedModel$Type} from "packages/net/minecraft/client/model/$HeadedModel"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SongInstrumentItem, $SongInstrumentItem$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$SongInstrumentItem"
import {$IFirstPersonAnimationProvider, $IFirstPersonAnimationProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$IFirstPersonAnimationProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IThirdPersonSpecialItemRenderer, $IThirdPersonSpecialItemRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$IThirdPersonSpecialItemRenderer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ArmedModel, $ArmedModel$Type} from "packages/net/minecraft/client/model/$ArmedModel"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$IThirdPersonAnimationProvider, $IThirdPersonAnimationProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$IThirdPersonAnimationProvider"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluteItem extends $SongInstrumentItem implements $IThirdPersonAnimationProvider, $IThirdPersonSpecialItemRenderer, $IFirstPersonAnimationProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "spawnNoteParticle"(level: $Level$Type, entity: $LivingEntity$Type, note: integer): void
public "use"(level: $Level$Type, player: $Player$Type, handIn: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(pStack: $ItemStack$Type, pLevel: $Level$Type, entity: $LivingEntity$Type, pTimeCharged: integer): void
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "isFoil"(pStack: $ItemStack$Type): boolean
public "isValidRepairItem"(pStack: $ItemStack$Type, pRepairCandidate: $ItemStack$Type): boolean
public "animateItemFirstPerson"(entity: $LivingEntity$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, matrixStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
public "renderThirdPersonItem"<T extends $Player, M extends ($EntityModel<(T)>) & ($ArmedModel) & ($HeadedModel)>(parentModel: M, entity: $LivingEntity$Type, stack: $ItemStack$Type, humanoidArm: $HumanoidArm$Type, poseStack: $PoseStack$Type, bufferSource: $MultiBufferSource$Type, light: integer): void
public "poseLeftArm"<T extends $LivingEntity>(stack: $ItemStack$Type, model: $HumanoidModel$Type<(T)>, entity: T, mainHand: $HumanoidArm$Type): boolean
public "poseRightArm"<T extends $LivingEntity>(stack: $ItemStack$Type, model: $HumanoidModel$Type<(T)>, entity: T, mainHand: $HumanoidArm$Type): boolean
public static "getMaxHeadXRot"(xRot: float): float
public "isTwoHanded"(): boolean
public static "interactWithPet"(stack: $ItemStack$Type, player: $Player$Type, target: $Entity$Type, hand: $InteractionHand$Type): boolean
public static "get"(target: $Item$Type): $IThirdPersonAnimationProvider
public static "attachToItem"(target: $Item$Type, object: $IThirdPersonAnimationProvider$Type): void
public static "attachToItem"(target: $Item$Type, object: $IThirdPersonSpecialItemRenderer$Type): void
public "animateItemFirstPerson"(entity: $Player$Type, stack: $ItemStack$Type, hand: $InteractionHand$Type, arm: $HumanoidArm$Type, poseStack: $PoseStack$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
public static "attachToItem"(target: $Item$Type, object: $IFirstPersonAnimationProvider$Type): void
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluteItem$Type = ($FluteItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluteItem_ = $FluteItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$PlanterBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $PlanterBlock extends $WaterBlock {
static readonly "EXTENDED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onTreeGrow"(state: $BlockState$Type, level: $LevelReader$Type, placeFunction: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>, randomSource: $RandomSource$Type, pos: $BlockPos$Type, config: $TreeConfiguration$Type): boolean
public "isFertile"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "canSustainPlant"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type, plantable: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlanterBlock$Type = ($PlanterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlanterBlock_ = $PlanterBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$MimicBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MimicBlock extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation


public "getSoundType"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getDestroyProgress"(state: $BlockState$Type, player: $Player$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MimicBlock$Type = ($MimicBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MimicBlock_ = $MimicBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/misc/effects/$OverencumberedEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $OverencumberedEffect extends $MobEffect {

constructor()

public "isInstantenous"(): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$Type, pAmplifier: integer): void
public "applyInstantenousEffect"(pSource: $Entity$Type, pIndirectSource: $Entity$Type, pLivingEntity: $LivingEntity$Type, pAmplifier: integer, pHealth: double): void
public "addAttributeModifiers"(pLivingEntity: $LivingEntity$Type, pAttributeMap: $AttributeMap$Type, pAmplifier: integer): void
public "removeAttributeModifiers"(pLivingEntity: $LivingEntity$Type, pAttributeMap: $AttributeMap$Type, pAmplifier: integer): void
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverencumberedEffect$Type = ($OverencumberedEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverencumberedEffect_ = $OverencumberedEffect$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$AbstractMobContainerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AbstractMobContainerItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any


public "getMobContainerWidth"(): float
public "place"(context: $BlockPlaceContext$Type): $InteractionResult
public "isFull"(stack: $ItemStack$Type): boolean
public "getMaxStackSize"(stack: $ItemStack$Type): integer
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "canFitInsideContainerItems"(): boolean
public "onLeftClickEntity"(stack: $ItemStack$Type, player: $Player$Type, entity: $Entity$Type): boolean
public "addPlacementTooltip"(tooltip: $List$Type<($Component$Type)>): void
public "playReleaseSound"(world: $Level$Type, v: $Vec3$Type): void
public "playCatchSound"(player: $Player$Type): void
public "isAquarium"(): boolean
public "playFailSound"(player: $Player$Type): void
public "canItemCatch"(arg0: $Entity$Type): boolean
public "saveEntityInItem"(entity: $Entity$Type, currentStack: $ItemStack$Type, bucketStack: $ItemStack$Type): $ItemStack
public "blocksPlacement"(): boolean
public "getMobContainerHeight"(): float
public "doInteract"(stack: $ItemStack$Type, player: $Player$Type, entity: $Entity$Type, hand: $InteractionHand$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "mobContainerWidth"(): float
get "aquarium"(): boolean
get "mobContainerHeight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMobContainerItem$Type = ($AbstractMobContainerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMobContainerItem_ = $AbstractMobContainerItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$ILeftClickReact" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILeftClickReact {

 "onLeftClick"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): boolean

(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): boolean
}

export namespace $ILeftClickReact {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILeftClickReact$Type = ($ILeftClickReact);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILeftClickReact_ = $ILeftClickReact$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/utils/$IQuiverPlayer" {
import {$SlotReference, $SlotReference$Type} from "packages/net/mehvahdjukaar/supplementaries/common/utils/$SlotReference"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IQuiverEntity, $IQuiverEntity$Type} from "packages/net/mehvahdjukaar/supplementaries/api/$IQuiverEntity"

export interface $IQuiverPlayer extends $IQuiverEntity {

 "supplementaries$setQuiverSlot"(arg0: $SlotReference$Type): void
 "supplementaries$getQuiverSlot"(): $SlotReference
 "supplementaries$getQuiver"(): $ItemStack
 "supplementaries$hasQuiver"(): boolean
 "supplementaries$setQuiver"(arg0: $ItemStack$Type): void
}

export namespace $IQuiverPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQuiverPlayer$Type = ($IQuiverPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQuiverPlayer_ = $IQuiverPlayer$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FirePitBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$LightUpWaterBlock, $LightUpWaterBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LightUpWaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FirePitBlock extends $LightUpWaterBlock {
static readonly "HANGING": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(fireDamage: float, properties: $BlockBehaviour$Properties$Type)

public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "isPathfindable"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getAdjacentBlockPathType"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, mob: $Mob$Type, originalType: $BlockPathTypes$Type): $BlockPathTypes
public "getBlockPathType"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, mob: $Mob$Type): $BlockPathTypes
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirePitBlock$Type = ($FirePitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirePitBlock_ = $FirePitBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ILavaAndWaterLoggable" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BucketPickup, $BucketPickup$Type} from "packages/net/minecraft/world/level/block/$BucketPickup"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$LiquidBlockContainer, $LiquidBlockContainer$Type} from "packages/net/minecraft/world/level/block/$LiquidBlockContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export interface $ILavaAndWaterLoggable extends $BucketPickup, $LiquidBlockContainer {

 "getPickupSound"(): $Optional<($SoundEvent)>
 "canPlaceLiquid"(reader: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluid: $Fluid$Type): boolean
 "placeLiquid"(world: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluidState: $FluidState$Type): boolean
 "pickupBlock"(pLevel: $LevelAccessor$Type, pPos: $BlockPos$Type, pState: $BlockState$Type): $ItemStack
 "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
}

export namespace $ILavaAndWaterLoggable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILavaAndWaterLoggable$Type = ($ILavaAndWaterLoggable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILavaAndWaterLoggable_ = $ILavaAndWaterLoggable$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LightUpBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ILightable, $ILightable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ILightable$FireSourceType, $ILightable$FireSourceType$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $LightUpBlock extends $Block implements $ILightable {
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation


public "entityInside"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, entityIn: $Entity$Type): void
public "onProjectileHit"(level: $Level$Type, state: $BlockState$Type, pHit: $BlockHitResult$Type, projectile: $Projectile$Type): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isLitUp"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "setLitUp"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, lit: boolean): void
public "lightUp"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, fireSourceType: $ILightable$FireSourceType$Type): boolean
public "extinguish"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
public "interactWithEntity"(level: $Level$Type, state: $BlockState$Type, projectile: $Entity$Type, pos: $BlockPos$Type): boolean
public "interactWithPlayer"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "isLitUp"(state: $BlockState$Type): boolean
public "playLightUpSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type, type: $ILightable$FireSourceType$Type): void
/**
 * 
 * @deprecated
 */
public "toggleLitState"(state: $BlockState$Type, lit: boolean): $BlockState
public "playExtinguishSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type): void
public "spawnSmokeParticles"(state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): void
public "canBeExtinguishedBy"(item: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "interactWithProjectile"(level: $Level$Type, state: $BlockState$Type, projectile: $Projectile$Type, pos: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightUpBlock$Type = ($LightUpBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightUpBlock_ = $LightUpBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$RakeDirection" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModBlockProperties$RakeDirection extends $Enum<($ModBlockProperties$RakeDirection)> implements $StringRepresentable {
static readonly "NORTH_SOUTH": $ModBlockProperties$RakeDirection
static readonly "EAST_WEST": $ModBlockProperties$RakeDirection
static readonly "SOUTH_EAST": $ModBlockProperties$RakeDirection
static readonly "SOUTH_WEST": $ModBlockProperties$RakeDirection
static readonly "NORTH_WEST": $ModBlockProperties$RakeDirection
static readonly "NORTH_EAST": $ModBlockProperties$RakeDirection


public "toString"(): string
public static "values"(): ($ModBlockProperties$RakeDirection)[]
public static "valueOf"(name: string): $ModBlockProperties$RakeDirection
public "getSerializedName"(): string
public static "fromDirections"(directions: $List$Type<($Direction$Type)>): $ModBlockProperties$RakeDirection
public "getDirections"(): $List<($Direction)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
get "directions"(): $List<($Direction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$RakeDirection$Type = (("south_west") | ("north_east") | ("east_west") | ("north_west") | ("south_east") | ("north_south")) | ($ModBlockProperties$RakeDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$RakeDirection_ = $ModBlockProperties$RakeDirection$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$PresentBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractPresentBlock, $AbstractPresentBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AbstractPresentBlock"

export class $PresentBlock extends $AbstractPresentBlock {
static readonly "SHAPE_LID": $VoxelShape
static readonly "SHAPE_OPEN": $VoxelShape
static readonly "SHAPE_CLOSED": $VoxelShape
static readonly "PACKED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(color: $DyeColor$Type, properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PresentBlock$Type = ($PresentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PresentBlock_ = $PresentBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FaucetBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FaucetBlock extends $WaterBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "ENABLED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "HAS_WATER": $BooleanProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "CONNECTED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "isOpen"(state: $BlockState$Type): boolean
public "animateTick"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getTileParticleColor"(pos: $BlockPos$Type, world: $Level$Type): integer
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onNeighborChange"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, neighbor: $BlockPos$Type): void
public "updateTileFluid"(state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
public "updateBlock"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, toggle: boolean): void
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaucetBlock$Type = ($FaucetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FaucetBlock_ = $FaucetBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LightUpWaterBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$LightUpBlock, $LightUpBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$LightUpBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ILightable$FireSourceType, $ILightable$FireSourceType$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType"

export class $LightUpWaterBlock extends $LightUpBlock implements $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation


public "lightUp"(entity: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, fireSourceType: $ILightable$FireSourceType$Type): boolean
public "placeLiquid"(worldIn: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluidStateIn: $FluidState$Type): boolean
public "getFluidState"(state: $BlockState$Type): $FluidState
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightUpWaterBlock$Type = ($LightUpWaterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightUpWaterBlock_ = $LightUpWaterBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IColored" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"

export interface $IColored {

/**
 * 
 * @deprecated
 */
 "changeItemColor"(color: $DyeColor$Type): $Item
 "supportsBlankColor"(): boolean
 "getColor"(): $DyeColor

(color: $DyeColor$Type): $Item
}

export namespace $IColored {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColored$Type = ($IColored);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColored_ = $IColored$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SackItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SackItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(blockIn: $Block$Type, builder: $Item$Properties$Type)

public "onDestroyed"(pItemEntity: $ItemEntity$Type): void
public "overrideStackedOnOther"(stack: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type): boolean
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, incoming: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, accessor: $SlotAccess$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, worldIn: $Level$Type, entityIn: $Entity$Type, itemSlot: integer, isSelected: boolean): void
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "getTooltipImage"(pStack: $ItemStack$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(): boolean
public static "getEncumber"(slotItem: $ItemStack$Type): float
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SackItem$Type = ($SackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SackItem_ = $SackItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BubbleBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BubbleBlock extends $Block implements $EntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "isPossibleToRespawnInThis"(blockState: $BlockState$Type): boolean
public "tick"(state: $BlockState$Type, serverLevel: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "stepOn"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $Entity$Type): void
public "fallOn"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, v: float): void
public "getCollisionShape"(state: $BlockState$Type, getter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, tBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "canBeReplaced"(state: $BlockState$Type, placeContext: $BlockPlaceContext$Type): boolean
public static "breakBubble"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): void
public static "sendParticles"(pos: $BlockPos$Type, level: $ServerLevel$Type): void
public "makeParticle"(pos: $BlockPos$Type, level: $Level$Type): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "addLandingEffects"(state1: $BlockState$Type, worldserver: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "propagatesSkylightDown"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleBlock$Type = ($BubbleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BubbleBlock_ = $BubbleBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$CageBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$CageBlockTile, $CageBlockTile$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/tiles/$CageBlockTile"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $CageBlock extends $WaterBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getCageItem"(te: $CageBlockTile$Type): $ItemStack
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CageBlock$Type = ($CageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CageBlock_ = $CageBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$ItemShelfBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ItemShelfBlock extends $WaterBlock implements $EntityBlock {
static readonly "ITEM_SHELF_BLOCKS": $List<($Block)>
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, pathType: $PathComputationType$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "isLadder"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, entity: $LivingEntity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShelfBlock$Type = ($ItemShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemShelfBlock_ = $ItemShelfBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer" {
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$Type} from "packages/net/minecraft/client/renderer/$BlockEntityWithoutLevelRenderer"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export class $ItemStackRenderer extends $BlockEntityWithoutLevelRenderer {


public "renderByItem"(arg0: $ItemStack$Type, arg1: $ItemDisplayContext$Type, arg2: $PoseStack$Type, arg3: $MultiBufferSource$Type, arg4: integer, arg5: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackRenderer$Type = ($ItemStackRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackRenderer_ = $ItemStackRenderer$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/misc/$Triplet" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Triplet<L, M, R> extends $Record {

constructor(left: L, middle: M, right: R)

public "left"(): L
public "right"(): R
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<A, B, C>(left: A, middle: B, right: C): $Triplet<(A), (B), (C)>
public "middle"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Triplet$Type<L, M, R> = ($Triplet<(L), (M), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Triplet_<L, M, R> = $Triplet$Type<(L), (M), (R)>;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$BlackboardItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICustomItemRendererProvider, $ICustomItemRendererProvider$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlackboardItem extends $BlockItem implements $ICustomItemRendererProvider {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(blockIn: $Block$Type, builder: $Item$Properties$Type)

public "appendHoverText"(pStack: $ItemStack$Type, pLevel: $Level$Type, pTooltip: $List$Type<($Component$Type)>, pFlag: $TooltipFlag$Type): void
public "getTooltipImage"(pStack: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
/**
 * 
 * @deprecated
 */
public "registerFabricRenderer"(): void
public "asItem"(): $Item
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "rendererFactory"(): $Supplier<($ItemStackRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackboardItem$Type = ($BlackboardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackboardItem_ = $BlackboardItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SafeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILavaAndWaterLoggable, $ILavaAndWaterLoggable$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ILavaAndWaterLoggable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SafeBlock extends $Block implements $ILavaAndWaterLoggable, $EntityBlock {
static readonly "SHAPE": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LAVALOGGED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
static readonly "CONTENTS": $ResourceLocation
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "tick"(state: $BlockState$Type, serverLevel: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "getMenuProvider"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getFluidState"(state: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onDestroyedByPlayer"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, willHarvest: boolean, fluid: $FluidState$Type): boolean
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(reader: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluid: $Fluid$Type): boolean
public "placeLiquid"(world: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type, fluidState: $FluidState$Type): boolean
public "pickupBlock"(pLevel: $LevelAccessor$Type, pPos: $BlockPos$Type, pState: $BlockState$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SafeBlock$Type = ($SafeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SafeBlock_ = $SafeBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$AshLayerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IFireConsumeBlockEvent, $IFireConsumeBlockEvent$Type} from "packages/net/mehvahdjukaar/moonlight/api/events/$IFireConsumeBlockEvent"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Biome$Precipitation, $Biome$Precipitation$Type} from "packages/net/minecraft/world/level/biome/$Biome$Precipitation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ISimpleBrushable, $ISimpleBrushable$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ISimpleBrushable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $AshLayerBlock extends $FallingBlock implements $ISimpleBrushable {
static readonly "LAYERS": $IntegerProperty
static readonly "RECURSION_HACK": $ThreadLocal<(boolean)>
static readonly "GRASS_SPREAD_WIDTH": integer
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "brush"(state: $BlockState$Type, pos: $BlockPos$Type, level: $Level$Type, stack: $ItemStack$Type, livingEntity: $Player$Type, arm: $HumanoidArm$Type, hit: $BlockHitResult$Type, particlesDir: $Vec3$Type): boolean
public "getVisualShape"(pState: $BlockState$Type, pReader: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "randomTick"(pState: $BlockState$Type, level: $ServerLevel$Type, pPos: $BlockPos$Type, pRandom: $RandomSource$Type): void
public static "applyBonemeal"(stack: $ItemStack$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, pRand: $RandomSource$Type): void
public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
public "onProjectileHit"(level: $Level$Type, state: $BlockState$Type, pHit: $BlockHitResult$Type, projectile: $Projectile$Type): void
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "fallOn"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, height: float): void
public "onLand"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, replaceableState: $BlockState$Type, fallingBlock: $FallingBlockEntity$Type): void
public "getDustColor"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getCollisionShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(pState: $BlockState$Type, pReader: $BlockGetter$Type, pPos: $BlockPos$Type): $VoxelShape
public "canBeReplaced"(pState: $BlockState$Type, useContext: $BlockPlaceContext$Type): boolean
public "canBeReplaced"(state: $BlockState$Type, fluid: $Fluid$Type): boolean
public "isPathfindable"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, pathType: $PathComputationType$Type): boolean
public "onPlace"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, facingState: $BlockState$Type, world: $LevelAccessor$Type, currentPos: $BlockPos$Type, otherPos: $BlockPos$Type): $BlockState
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public static "updateBasaltBelow"(selfPos: $BlockPos$Type, level: $Level$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "handlePrecipitation"(pState: $BlockState$Type, level: $Level$Type, pPos: $BlockPos$Type, pPrecipitation: $Biome$Precipitation$Type): void
public static "tryConvertToAsh"(event: $IFireConsumeBlockEvent$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AshLayerBlock$Type = ($AshLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AshLayerBlock_ = $AshLayerBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SignPostWallBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SignPostWallBlock extends $WaterBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "isPossibleToRespawnInThis"(state: $BlockState$Type): boolean
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignPostWallBlock$Type = ($SignPostWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignPostWallBlock_ = $SignPostWallBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/goals/$ISuppEvoker" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ISuppEvoker {

 "supplementaries$setSpellCastingTime"(arg0: integer): void
 "supplementaries$setCustomWololoo"(arg0: $LivingEntity$Type): void
 "supplementaries$getCustomWololoo"(): $LivingEntity
}

export namespace $ISuppEvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISuppEvoker$Type = ($ISuppEvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISuppEvoker_ = $ISuppEvoker$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$WindVaneBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $WindVaneBlock extends $WaterBlock implements $EntityBlock {
static readonly "WIND_STRENGTH": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "getDirectSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "isSignalSource"(state: $BlockState$Type): boolean
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public static "updatePower"(bs: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): void
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindVaneBlock$Type = ($WindVaneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindVaneBlock_ = $WindVaneBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$RoadSignFeature$Config" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$RoadSignFeature$RandomState, $RoadSignFeature$RandomState$Type} from "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$RoadSignFeature$RandomState"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$WoodType, $WoodType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/wood/$WoodType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$FeatureConfiguration, $FeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $RoadSignFeature$Config extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($RoadSignFeature$Config)>

constructor(randomState: $RoadSignFeature$RandomState$Type, postWood: $WoodType$Type, signWood: $WoodType$Type, fence: $BlockState$Type, trapdoor: $BlockState$Type, slab: $BlockState$Type, log: $BlockState$Type, cobble: $BlockState$Type, mossyCobble: $BlockState$Type, wall: $BlockState$Type, mossyWall: $BlockState$Type, lanternUp: $BlockState$Type, lanternDown: $BlockState$Type, candleHolder: $BlockState$Type, stone: $BlockState$Type, stoneSlab: $BlockState$Type, stoneStairs: $BlockState$Type, invalidMessage: string)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "log"(): $BlockState
public "fence"(): $BlockState
public "wall"(): $BlockState
public "slab"(): $BlockState
public "invalidMessage"(): string
public "postWood"(): $WoodType
public "trapdoor"(): $BlockState
public "cobble"(): $BlockState
public "signWood"(): $WoodType
public "randomState"(): $RoadSignFeature$RandomState
public "mossyCobble"(): $BlockState
public "mossyWall"(): $BlockState
public "lanternDown"(): $BlockState
public "candleHolder"(): $BlockState
public "stoneSlab"(): $BlockState
public "stoneStairs"(): $BlockState
public "lanternUp"(): $BlockState
public "stone"(): $BlockState
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoadSignFeature$Config$Type = ($RoadSignFeature$Config);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoadSignFeature$Config_ = $RoadSignFeature$Config$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$RakedGravelBlock" {
import {$ModBlockProperties$RakeDirection, $ModBlockProperties$RakeDirection$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$RakeDirection"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$GravelBlock, $GravelBlock$Type} from "packages/net/minecraft/world/level/block/$GravelBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $RakedGravelBlock extends $GravelBlock {
static readonly "RAKE_DIRECTION": $EnumProperty<($ModBlockProperties$RakeDirection)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "tick"(state: $BlockState$Type, world: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, pathType: $PathComputationType$Type): boolean
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, fromState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, fromPos: $BlockPos$Type): $BlockState
public static "getConnectedState"(blockstate: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, front: $Direction$Type): $BlockState
public static "turnToGravel"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RakedGravelBlock$Type = ($RakedGravelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RakedGravelBlock_ = $RakedGravelBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SackBlock extends $FallingBlock implements $EntityBlock, $SimpleWaterloggedBlock {
static readonly "SACK_BLOCKS": $List<($Block)>
static readonly "SHAPE_CLOSED": $VoxelShape
static readonly "SHAPE_OPEN": $VoxelShape
static readonly "CONTENTS": $ResourceLocation
static readonly "OPEN": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): integer
public "onLand"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, state1: $BlockState$Type, blockEntity: $FallingBlockEntity$Type): void
public "getDustColor"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getFluidState"(state: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "onPlace"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public static "canFall"(pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SackBlock$Type = ($SackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SackBlock_ = $SackBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$ExpandedMapData" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CustomMapDecoration, $CustomMapDecoration$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$CustomMapData$Type, $CustomMapData$Type$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import {$MapBlockMarker, $MapBlockMarker$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker"
import {$CustomMapData, $CustomMapData$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ExpandedMapData {

 "copy"(): $MapItemSavedData
 "toggleCustomDecoration"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
 "removeCustomMarker"(arg0: string): boolean
 "setCustomDataDirty"<H extends $CustomMapData$DirtyCounter>(arg0: $CustomMapData$Type$Type<(any)>, arg1: $Consumer$Type<(H)>): void
 "addCustomMarker"<M extends $MapBlockMarker<(any)>>(arg0: M): void
 "getCustomMarkers"(): $Map<(string), ($MapBlockMarker<(any)>)>
 "getCustomData"(): $Map<($ResourceLocation), ($CustomMapData<(any)>)>
 "getCustomDecorations"(): $Map<(string), ($CustomMapDecoration)>
 "getVanillaDecorationSize"(): integer
 "setCustomDecorationsDirty"(): void
 "resetCustomDecoration"(): void
}

export namespace $ExpandedMapData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExpandedMapData$Type = ($ExpandedMapData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExpandedMapData_ = $ExpandedMapData$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$IThirdPersonAnimationProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IThirdPersonAnimationProvider {

 "poseLeftArm"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: $HumanoidModel$Type<(T)>, arg2: T, arg3: $HumanoidArm$Type): boolean
 "poseRightArm"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: $HumanoidModel$Type<(T)>, arg2: T, arg3: $HumanoidArm$Type): boolean
 "isTwoHanded"(): boolean
}

export namespace $IThirdPersonAnimationProvider {
function get(target: $Item$Type): $IThirdPersonAnimationProvider
function attachToItem(target: $Item$Type, object: $IThirdPersonAnimationProvider$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IThirdPersonAnimationProvider$Type = ($IThirdPersonAnimationProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IThirdPersonAnimationProvider_ = $IThirdPersonAnimationProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$RoadSignFeature" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RoadSignFeature$Config, $RoadSignFeature$Config$Type} from "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$RoadSignFeature$Config"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$StructureLocator$LocatedStruct, $StructureLocator$LocatedStruct$Type} from "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$StructureLocator$LocatedStruct"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $RoadSignFeature extends $Feature<($RoadSignFeature$Config)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(codec: $Codec$Type<($RoadSignFeature$Config$Type)>)

public static "applyPostProcess"(c: $RoadSignFeature$Config$Type, level: $ServerLevel$Type, generatorPos: $BlockPos$Type, foundVillages: $List$Type<($StructureLocator$LocatedStruct$Type)>): void
public static "isNotSolid"(world: $LevelAccessor$Type, pos: $BlockPos$Type): boolean
public "place"(context: $FeaturePlaceContext$Type<($RoadSignFeature$Config$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoadSignFeature$Type = ($RoadSignFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoadSignFeature_ = $RoadSignFeature$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$PostType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModBlockProperties$PostType extends $Enum<($ModBlockProperties$PostType)> implements $StringRepresentable {
static readonly "POST": $ModBlockProperties$PostType
static readonly "PALISADE": $ModBlockProperties$PostType
static readonly "WALL": $ModBlockProperties$PostType
static readonly "BEAM": $ModBlockProperties$PostType


public "getName"(): string
public static "get"(state: $BlockState$Type): $ModBlockProperties$PostType
public static "get"(state: $BlockState$Type, needsFullHeight: boolean): $ModBlockProperties$PostType
public "toString"(): string
public static "values"(): ($ModBlockProperties$PostType)[]
public static "valueOf"(name: string): $ModBlockProperties$PostType
public "getOffset"(): float
public "getWidth"(): integer
public "getSerializedName"(): string
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "name"(): string
get "offset"(): float
get "width"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$PostType$Type = (("beam") | ("post") | ("palisade") | ("wall")) | ($ModBlockProperties$PostType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$PostType_ = $ModBlockProperties$PostType$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$EndermanSkullBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$SkullBlock, $SkullBlock$Type} from "packages/net/minecraft/world/level/block/$SkullBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SkullBlock$Type, $SkullBlock$Type$Type} from "packages/net/minecraft/world/level/block/$SkullBlock$Type"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EndermanSkullBlock extends $SkullBlock {
static readonly "TYPE": $SkullBlock$Type
static readonly "SHAPE_ANGERY": $VoxelShape
static readonly "WATCHED": $BooleanProperty
static readonly "POWER": $IntegerProperty
static readonly "MAX": integer
static readonly "ROTATION": $IntegerProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "isSignalSource"(state: $BlockState$Type): boolean
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndermanSkullBlock$Type = ($EndermanSkullBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndermanSkullBlock_ = $EndermanSkullBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FlintBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$Type} from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IPistonMotionReact, $IPistonMotionReact$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IPistonMotionReact"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FlintBlock extends $Block implements $IPistonMotionReact {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "onMoved"(level: $Level$Type, pos: $BlockPos$Type, movedState: $BlockState$Type, direction: $Direction$Type, extending: boolean): void
public "stepOn"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $Entity$Type): void
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldBlock: $Block$Type, targetPos: $BlockPos$Type, isMoving: boolean): void
public static "canBlockCreateSpark"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, face: $Direction$Type): boolean
/**
 * 
 * @deprecated
 */
public "onMoved"(movedState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, extending: boolean, tile: $PistonMovingBlockEntity$Type): void
/**
 * 
 * @deprecated
 */
public "moveTick"(movedState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, aabb: $AABB$Type, tile: $PistonMovingBlockEntity$Type): void
public "moveTick"(level: $Level$Type, pos: $BlockPos$Type, movedState: $BlockState$Type, aabb: $AABB$Type, tile: $PistonMovingBlockEntity$Type): void
public "ticksWhileMoved"(): boolean
public "onMagnetMoved"(level: $Level$Type, blockPos: $BlockPos$Type, direction: $Direction$Type, blockState: $BlockState$Type, blockEntity: $BlockEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlintBlock$Type = ($FlintBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlintBlock_ = $FlintBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/api/$IAntiqueTextProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAntiqueTextProvider {

 "setAntiqueInk"(arg0: boolean): void
 "hasAntiqueInk"(): boolean
}

export namespace $IAntiqueTextProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAntiqueTextProvider$Type = ($IAntiqueTextProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAntiqueTextProvider_ = $IAntiqueTextProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FodderBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $FodderBlock extends $WaterBlock {
static readonly "LAYERS": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "getFlammability"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "getFireSpreadSpeed"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, face: $Direction$Type): integer
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "isPathfindable"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, pathType: $PathComputationType$Type): boolean
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, facingState: $BlockState$Type, world: $LevelAccessor$Type, currentPos: $BlockPos$Type, otherPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FodderBlock$Type = ($FodderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FodderBlock_ = $FodderBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$JarBoatBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $JarBoatBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(builder: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "isPathfindable"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JarBoatBlock$Type = ($JarBoatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JarBoatBlock_ = $JarBoatBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BlockGeneratorBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockGeneratorBlock extends $Block implements $EntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGeneratorBlock$Type = ($BlockGeneratorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGeneratorBlock_ = $BlockGeneratorBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/fluids/$LumiseneFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$FiniteFluid, $FiniteFluid$Type} from "packages/net/mehvahdjukaar/supplementaries/common/fluids/$FiniteFluid"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $LumiseneFluid extends $FiniteFluid {
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

public "getFluidType"(): $FluidType
get "fluidType"(): $FluidType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LumiseneFluid$Type = ($LumiseneFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LumiseneFluid_ = $LumiseneFluid$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/misc/$MapRegistry" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$UnboundedMapCodec, $UnboundedMapCodec$Type} from "packages/com/mojang/serialization/codecs/$UnboundedMapCodec"
import {$MapEncoder, $MapEncoder$Type} from "packages/com/mojang/serialization/$MapEncoder"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Encoder, $Encoder$Type} from "packages/com/mojang/serialization/$Encoder"
import {$Codec$ResultFunction, $Codec$ResultFunction$Type} from "packages/com/mojang/serialization/$Codec$ResultFunction"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Decoder$Boxed, $Decoder$Boxed$Type} from "packages/com/mojang/serialization/$Decoder$Boxed"
import {$MapDecoder, $MapDecoder$Type} from "packages/com/mojang/serialization/$MapDecoder"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Decoder$Simple, $Decoder$Simple$Type} from "packages/com/mojang/serialization/$Decoder$Simple"
import {$SimpleMapCodec, $SimpleMapCodec$Type} from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import {$Decoder$Terminal, $Decoder$Terminal$Type} from "packages/com/mojang/serialization/$Decoder$Terminal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$CodecMapRegistry, $CodecMapRegistry$Type} from "packages/net/mehvahdjukaar/moonlight/api/misc/$CodecMapRegistry"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $MapRegistry<T> implements $IdMap<(T)>, $Codec<(T)> {

constructor(name: string)

public "dispatch"<E>(type: $Function$Type<(any), (any)>): $Codec<(E)>
public "clear"(): void
public "decode"<U>(ops: $DynamicOps$Type<(U)>, json: U): $DataResult<($Pair<(T), (U)>)>
public "encode"<U>(object: T, ops: $DynamicOps$Type<(U)>, prefix: U): $DataResult<(U)>
public "getValue"(name: string): T
public "getValue"(name: $ResourceLocation$Type): T
public "iterator"(): $Iterator<(T)>
public "contains"(id: integer): boolean
public "getKey"(value: T): $ResourceLocation
public "register"<B extends T>(name: string, value: B): T
public "register"<B extends T>(name: $ResourceLocation$Type, value: B): T
public "containsKey"(name: $ResourceLocation$Type): boolean
public "keySet"(): $Set<($ResourceLocation)>
public "getEntries"(): $Set<($Map$Entry<($ResourceLocation), (T)>)>
public "size"(): integer
public "byId"(id: integer): T
public "getId"(value: T): integer
public "getValueOrDefault"(parse: $ResourceLocation$Type, defaultType: T): T
public "getValues"(): $Set<(T)>
public static "ofCodec"<B>(name: string): $CodecMapRegistry<(B)>
public static "ofCodec"<B>(): $CodecMapRegistry<(B)>
public "byIdOrThrow"(arg0: integer): T
public static "unit"<A>(arg0: $Supplier$Type<(T)>): $Codec<(T)>
public static "unit"<A>(arg0: T): $Codec<(T)>
public "dispatch"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
public "dispatch"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $Codec<(E)>
public static "of"<A>(arg0: $MapEncoder$Type<(T)>, arg1: $MapDecoder$Type<(T)>, arg2: $Supplier$Type<(string)>): $MapCodec<(T)>
public static "of"<A>(arg0: $Encoder$Type<(T)>, arg1: $Decoder$Type<(T)>): $Codec<(T)>
public static "of"<A>(arg0: $MapEncoder$Type<(T)>, arg1: $MapDecoder$Type<(T)>): $MapCodec<(T)>
public static "of"<A>(arg0: $Encoder$Type<(T)>, arg1: $Decoder$Type<(T)>, arg2: string): $Codec<(T)>
public static "list"<E>(arg0: $Codec$Type<(E)>): $Codec<($List<(E)>)>
public "orElse"(arg0: T): $Codec<(T)>
public "orElse"(arg0: $UnaryOperator$Type<(string)>, arg1: T): $Codec<(T)>
public "orElse"(arg0: $Consumer$Type<(string)>, arg1: T): $Codec<(T)>
public static "checkRange"<N extends (number) & ($Comparable<(N)>)>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
public "orElseGet"(arg0: $Supplier$Type<(any)>): $Codec<(T)>
public "orElseGet"(arg0: $Consumer$Type<(string)>, arg1: $Supplier$Type<(any)>): $Codec<(T)>
public "orElseGet"(arg0: $UnaryOperator$Type<(string)>, arg1: $Supplier$Type<(any)>): $Codec<(T)>
public static "pair"<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Pair<(F), (S)>)>
public "xmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public "flatXmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public static "optionalField"<F>(arg0: string, arg1: $Codec$Type<(F)>): $MapCodec<($Optional<(F)>)>
public "optionalFieldOf"(arg0: string, arg1: T, arg2: $Lifecycle$Type): $MapCodec<(T)>
public "optionalFieldOf"(arg0: string, arg1: $Lifecycle$Type, arg2: T, arg3: $Lifecycle$Type): $MapCodec<(T)>
public "optionalFieldOf"(arg0: string): $MapCodec<($Optional<(T)>)>
public "optionalFieldOf"(arg0: string, arg1: T): $MapCodec<(T)>
public "deprecated"(arg0: integer): $Codec<(T)>
public "fieldOf"(arg0: string): $MapCodec<(T)>
public "partialDispatch"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $Codec<(E)>
public "promotePartial"(arg0: $Consumer$Type<(string)>): $Codec<(T)>
public "dispatchMap"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $MapCodec<(E)>
public "dispatchMap"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $MapCodec<(E)>
public "mapResult"(arg0: $Codec$ResultFunction$Type<(T)>): $Codec<(T)>
public static "mapPair"<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
public static "mapEither"<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
public static "compoundList"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
public static "either"<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Either<(F), (S)>)>
public "dispatchStable"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
public static "unboundedMap"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $UnboundedMapCodec<(K), (V)>
public "comapFlatMap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public static "simpleMap"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>, arg2: $Keyable$Type): $SimpleMapCodec<(K), (V)>
public "flatComapMap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
public static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
public static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
public "stable"(): $Codec<(T)>
public "listOf"(): $Codec<($List<(T)>)>
public "spliterator"(): $Spliterator<(T)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public static "empty"<A>(): $MapEncoder<(T)>
public static "error"<A>(arg0: string): $Encoder<(T)>
public "comap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
public "flatComap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
public "encodeStart"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<(T)>
public "decode"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<($Pair<(T), (T)>)>
public "map"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
public "flatMap"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
public "parse"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<(T)>
public "parse"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<(T)>
public "boxed"(): $Decoder$Boxed<(T)>
public static "ofSimple"<A>(arg0: $Decoder$Simple$Type<(any)>): $Decoder<(T)>
public static "ofTerminal"<A>(arg0: $Decoder$Terminal$Type<(any)>): $Decoder<(T)>
public static "ofBoxed"<A>(arg0: $Decoder$Boxed$Type<(any)>): $Decoder<(T)>
public "simple"(): $Decoder$Simple<(T)>
public "terminal"(): $Decoder$Terminal<(T)>
[Symbol.iterator](): IterableIterator<T>;
get "entries"(): $Set<($Map$Entry<($ResourceLocation), (T)>)>
get "values"(): $Set<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRegistry$Type<T> = ($MapRegistry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRegistry_<T> = $MapRegistry$Type<(T)>;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$LunchBoxItem$Data" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$SelectableContainerItem$AbstractData, $SelectableContainerItem$AbstractData$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/$SelectableContainerItem$AbstractData"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $LunchBoxItem$Data extends $SelectableContainerItem$AbstractData {

 "canEatFrom"(): boolean
 "switchMode"(): void
 "canAcceptItem"(toInsert: $ItemStack$Type): boolean
 "consumeSelected"(): void
 "getSelected"(): $ItemStack
 "cycle"(slotsMoved: integer): boolean
 "cycle"(): boolean
 "cycle"(clockWise: boolean): boolean
 "getContentView"(): $List<($ItemStack)>
 "getSelectedSlot"(): integer
 "removeOneStack"(): $Optional<($ItemStack)>
 "updateSelectedIfNeeded"(): void
 "getSelectedItemCount"(): integer
 "setSelectedSlot"(arg0: integer): void
 "tryAdding"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "tryAdding"(pInsertedStack: $ItemStack$Type): $ItemStack
}

export namespace $LunchBoxItem$Data {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunchBoxItem$Data$Type = ($LunchBoxItem$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunchBoxItem$Data_ = $LunchBoxItem$Data$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/client/$ICustomItemRendererProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ItemStackRenderer, $ItemStackRenderer$Type} from "packages/net/mehvahdjukaar/moonlight/api/client/$ItemStackRenderer"

export interface $ICustomItemRendererProvider extends $ItemLike {

/**
 * 
 * @deprecated
 */
 "registerFabricRenderer"(): void
 "getRendererFactory"(): $Supplier<($ItemStackRenderer)>
 "asItem"(): $Item
}

export namespace $ICustomItemRendererProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomItemRendererProvider$Type = ($ICustomItemRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomItemRendererProvider_ = $ICustomItemRendererProvider$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/forge/$ShulkerShellItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShulkerShellItem extends $ArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getMaxStackSize"(stack: $ItemStack$Type): integer
public "isDamageable"(stack: $ItemStack$Type): boolean
public "isEnchantable"(stack: $ItemStack$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerShellItem$Type = ($ShulkerShellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerShellItem_ = $ShulkerShellItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/$ISlimeable" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ISlimeable {

 "supp$setSlimedTicks"(arg0: integer, arg1: boolean): void
 "supp$getSlimedTicks"(): integer
}

export namespace $ISlimeable {
function getAlpha(le: $LivingEntity$Type, partialTicks: float): float
function tickEntity(entity: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlimeable$Type = ($ISlimeable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlimeable_ = $ISlimeable$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$BookPileBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BookPileBlock extends $WaterBlock implements $EntityBlock {
static readonly "BOOKS": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "canBeReplaced"(state: $BlockState$Type, context: $BlockPlaceContext$Type): boolean
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getEnchantPowerBonus"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): float
public "isAcceptedItem"(i: $Item$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPileBlock$Type = ($BookPileBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookPileBlock_ = $BookPileBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/crafting/$SusRecipe$Serializer" {
import {$SusRecipe, $SusRecipe$Type} from "packages/net/mehvahdjukaar/supplementaries/common/items/crafting/$SusRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SusRecipe$Serializer implements $RecipeSerializer<($SusRecipe)> {

constructor()

public "fromJson"(recipeId: $ResourceLocation$Type, json: $JsonObject$Type): $SusRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $SusRecipe$Type): void
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $SusRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SusRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SusRecipe$Serializer$Type = ($SusRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SusRecipe$Serializer_ = $SusRecipe$Serializer$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$DisplayStatus" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModBlockProperties$DisplayStatus extends $Enum<($ModBlockProperties$DisplayStatus)> implements $StringRepresentable {
static readonly "NONE": $ModBlockProperties$DisplayStatus
static readonly "EMPTY": $ModBlockProperties$DisplayStatus
static readonly "FULL": $ModBlockProperties$DisplayStatus


public "toString"(): string
public static "values"(): ($ModBlockProperties$DisplayStatus)[]
public static "valueOf"(name: string): $ModBlockProperties$DisplayStatus
public "getSerializedName"(): string
public "hasItem"(): boolean
public "hasTile"(): boolean
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$DisplayStatus$Type = (("none") | ("empty") | ("full")) | ($ModBlockProperties$DisplayStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$DisplayStatus_ = $ModBlockProperties$DisplayStatus$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/$WoodBasedBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockTypeBasedBlockItem, $BlockTypeBasedBlockItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/$BlockTypeBasedBlockItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$WoodType, $WoodType$Type} from "packages/net/mehvahdjukaar/moonlight/api/set/wood/$WoodType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WoodBasedBlockItem extends $BlockTypeBasedBlockItem<($WoodType)> {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(blockIn: $Block$Type, builder: $Item$Properties$Type, woodType: $WoodType$Type, burnTicks: integer)
constructor(blockIn: $Block$Type, builder: $Item$Properties$Type, burnTicks: integer)
constructor(blockIn: $Block$Type, builder: $Item$Properties$Type, woodType: $WoodType$Type)

public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodBasedBlockItem$Type = ($WoodBasedBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodBasedBlockItem_ = $WoodBasedBlockItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$RedstoneIlluminatorBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $RedstoneIlluminatorBlock extends $Block {
static readonly "POWER": $IntegerProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, fromPos: $BlockPos$Type, moving: boolean): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneIlluminatorBlock$Type = ($RedstoneIlluminatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneIlluminatorBlock_ = $RedstoneIlluminatorBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$StatueBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $StatueBlock extends $WaterBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "LIT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "animateTick"(stateIn: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public static "addCandleParticleAndSound"(level: $Level$Type, vec3: $Vec3$Type, random: $RandomSource$Type): void
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatueBlock$Type = ($StatueBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatueBlock_ = $StatueBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$SafeItem" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SafeItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(blockIn: $Block$Type, builder: $Item$Properties$Type)

public "overrideStackedOnOther"(stack: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type): boolean
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, incoming: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, accessor: $SlotAccess$Type): boolean
public "getTooltipImage"(pStack: $ItemStack$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SafeItem$Type = ($SafeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SafeItem_ = $SafeItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SugarBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ConcretePowderBlock, $ConcretePowderBlock$Type} from "packages/net/minecraft/world/level/block/$ConcretePowderBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Biome$Precipitation, $Biome$Precipitation$Type} from "packages/net/minecraft/world/level/biome/$Biome$Precipitation"

export class $SugarBlock extends $ConcretePowderBlock {
readonly "concrete": $BlockState
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "onLand"(level: $Level$Type, pos: $BlockPos$Type, blockState: $BlockState$Type, blockState2: $BlockState$Type, fallingBlock: $FallingBlockEntity$Type): void
public "getDustColor"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "triggerEvent"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, id: integer, param: integer): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "handlePrecipitation"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, precipitation: $Biome$Precipitation$Type): void
public "spawnDissolveParticles"(level: $Level$Type, pos: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SugarBlock$Type = ($SugarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SugarBlock_ = $SugarBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$CannonBallItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CannonBallItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "use"(worldIn: $Level$Type, playerIn: $Player$Type, handIn: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonBallItem$Type = ($CannonBallItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonBallItem_ = $CannonBallItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SignPostBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IRotatable, $IRotatable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRotatable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$FenceMimicBlock, $FenceMimicBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FenceMimicBlock"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $SignPostBlock extends $FenceMimicBlock implements $EntityBlock, $IRotatable {
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "rotate"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rot: $Rotation$Type): $BlockState
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "rotateOverAxis"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rot: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($Direction)>
public "getRotatedState"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($BlockState)>
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "onRotated"(newState: $BlockState$Type, oldState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignPostBlock$Type = ($SignPostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignPostBlock_ = $SignPostBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$ModBlockProperties$Topping" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SoftFluidStack, $SoftFluidStack$Type} from "packages/net/mehvahdjukaar/moonlight/api/fluids/$SoftFluidStack"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModBlockProperties$Topping extends $Enum<($ModBlockProperties$Topping)> implements $StringRepresentable {
static readonly "NONE": $ModBlockProperties$Topping
static readonly "HONEY": $ModBlockProperties$Topping
static readonly "SYRUP": $ModBlockProperties$Topping
static readonly "CHOCOLATE": $ModBlockProperties$Topping
static readonly "JAM": $ModBlockProperties$Topping


public static "values"(): ($ModBlockProperties$Topping)[]
public static "valueOf"(name: string): $ModBlockProperties$Topping
public "getSerializedName"(): string
public static "fromItem"(item: $Item$Type): $Pair<($ModBlockProperties$Topping), ($Item)>
public static "fromFluidItem"(item: $Item$Type): $Pair<($ModBlockProperties$Topping), ($Item)>
public static "fromFluid"(stack: $SoftFluidStack$Type): $ModBlockProperties$Topping
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$Topping$Type = (("honey") | ("jam") | ("syrup") | ("none") | ("chocolate")) | ($ModBlockProperties$Topping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlockProperties$Topping_ = $ModBlockProperties$Topping$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$WaySignStructure$Type" {
import {$StructureType, $StructureType$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$WaySignStructure, $WaySignStructure$Type} from "packages/net/mehvahdjukaar/supplementaries/common/worldgen/$WaySignStructure"

export class $WaySignStructure$Type implements $StructureType<($WaySignStructure)> {

constructor()

public "codec"(): $Codec<($WaySignStructure)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaySignStructure$Type$Type = ($WaySignStructure$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaySignStructure$Type_ = $WaySignStructure$Type$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$HatStandItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HatStandItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatStandItem$Type = ($HatStandItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HatStandItem_ = $HatStandItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IBeeGrowable" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBeeGrowable {

 "getPollinated"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
 "isPlantFullyGrown"(state: $BlockState$Type, pos: $BlockPos$Type, level: $Level$Type): boolean

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
}

export namespace $IBeeGrowable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBeeGrowable$Type = ($IBeeGrowable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBeeGrowable_ = $IBeeGrowable$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IWashable" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IWashable {

/**
 * 
 * @deprecated
 */
 "tryWash"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): boolean
 "tryWash"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, hitPos: $Vec3$Type): boolean
}

export namespace $IWashable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWashable$Type = ($IWashable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWashable_ = $IWashable$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$CannonBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILightable, $ILightable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$IFireItemBehavior, $IFireItemBehavior$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/fire_behaviors/$IFireItemBehavior"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IRotatable, $IRotatable$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$IRotatable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ILightable$FireSourceType, $ILightable$FireSourceType$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$ILightable$FireSourceType"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $CannonBlock extends $DirectionalBlock implements $EntityBlock, $ILightable, $IRotatable {
static readonly "POWERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "lightUp"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type, fireSourceType: $ILightable$FireSourceType$Type): boolean
public "getVisualShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, level: $Level$Type, blockPos: $BlockPos$Type): integer
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getOcclusionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$Type, pState: $BlockState$Type, pBlockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getShadeBrightness"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getMenuProvider"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "isSignalSource"(state: $BlockState$Type): boolean
public "hasAnalogOutputSignal"(blockState: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "canBeReplaced"(state: $BlockState$Type, fluid: $Fluid$Type): boolean
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "triggerEvent"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, id: integer, param: integer): boolean
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getRotatedState"(state: $BlockState$Type, levelAccessor: $LevelAccessor$Type, blockPos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($BlockState)>
public static "getCannonBehavior"(item: $ItemLike$Type): $IFireItemBehavior
public static "registerBehavior"(pItem: $ItemLike$Type, pBehavior: $IFireItemBehavior$Type): void
public "onRotated"(newState: $BlockState$Type, oldState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "propagatesSkylightDown"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "appendHoverText"(itemStack: $ItemStack$Type, blockGetter: $BlockGetter$Type, list: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "isLitUp"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "extinguish"(player: $Entity$Type, state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): boolean
public "interactWithEntity"(level: $Level$Type, state: $BlockState$Type, projectile: $Entity$Type, pos: $BlockPos$Type): boolean
public "interactWithPlayer"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "isLitUp"(state: $BlockState$Type): boolean
public "playLightUpSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type, type: $ILightable$FireSourceType$Type): void
public "setLitUp"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, lit: boolean): void
/**
 * 
 * @deprecated
 */
public "toggleLitState"(state: $BlockState$Type, lit: boolean): $BlockState
public "playExtinguishSound"(world: $LevelAccessor$Type, pos: $BlockPos$Type): void
public "spawnSmokeParticles"(state: $BlockState$Type, pos: $BlockPos$Type, world: $LevelAccessor$Type): void
public "canBeExtinguishedBy"(item: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "interactWithProjectile"(level: $Level$Type, state: $BlockState$Type, projectile: $Projectile$Type, pos: $BlockPos$Type): boolean
public "rotateOverAxis"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type, axis: $Direction$Type, hit: $Vec3$Type): $Optional<($Direction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonBlock$Type = ($CannonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonBlock_ = $CannonBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/forge/$LumiseneBucketItem" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BucketItem, $BucketItem$Type} from "packages/net/minecraft/world/item/$BucketItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LumiseneBucketItem extends $BucketItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(supplier: $Supplier$Type<(any)>, builder: $Item$Properties$Type, capacity: integer)

public "emptyContents"(arg: $Player$Type, level: $Level$Type, pos: $BlockPos$Type, hitResult: $BlockHitResult$Type, container: $ItemStack$Type): boolean
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LumiseneBucketItem$Type = ($LumiseneBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LumiseneBucketItem_ = $LumiseneBucketItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/client/model/$ModelDataKey" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $ModelDataKey<T> {

constructor(type: $Class$Type<(T)>)

public "equals"(obj: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelDataKey$Type<T> = ($ModelDataKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelDataKey_<T> = $ModelDataKey$Type<(T)>;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$CaveFilter" {
import {$PlacementFilter, $PlacementFilter$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacementFilter"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$PlacementModifierType, $PlacementModifierType$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifierType"

export class $CaveFilter extends $PlacementFilter {
static readonly "CODEC": $Codec<($CaveFilter)>


public "type"(): $PlacementModifierType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CaveFilter$Type = ($CaveFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CaveFilter_ = $CaveFilter$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$FenceMimicBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$MimicBlock, $MimicBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$MimicBlock"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FenceMimicBlock extends $MimicBlock implements $SimpleWaterloggedBlock, $EntityBlock {
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation


public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getMenuProvider"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): $MenuProvider
public "getFluidState"(state: $BlockState$Type): $FluidState
public "updateShape"(state: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, world: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceMimicBlock$Type = ($FenceMimicBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FenceMimicBlock_ = $FenceMimicBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/items/$LumiseneBottleItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LumiseneBottleItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getUseDuration"(stack: $ItemStack$Type): integer
public "finishUsingItem"(stack: $ItemStack$Type, level: $Level$Type, livingEntity: $LivingEntity$Type): $ItemStack
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "getEatingSound"(): $SoundEvent
public "getDrinkingSound"(): $SoundEvent
get "eatingSound"(): $SoundEvent
get "drinkingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LumiseneBottleItem$Type = ($LumiseneBottleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LumiseneBottleItem_ = $LumiseneBottleItem$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$EndermanSkullWallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WallSkullBlock, $WallSkullBlock$Type} from "packages/net/minecraft/world/level/block/$WallSkullBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EndermanSkullWallBlock extends $WallSkullBlock {
static readonly "WATCHED": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getSignal"(blockState: $BlockState$Type, blockAccess: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "isSignalSource"(state: $BlockState$Type): boolean
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndermanSkullWallBlock$Type = ($EndermanSkullWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndermanSkullWallBlock_ = $EndermanSkullWallBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/$BombEntity$BreakingMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BombEntity$BreakingMode extends $Enum<($BombEntity$BreakingMode)> {
static readonly "ALL": $BombEntity$BreakingMode
static readonly "WEAK": $BombEntity$BreakingMode
static readonly "NONE": $BombEntity$BreakingMode


public static "values"(): ($BombEntity$BreakingMode)[]
public static "valueOf"(name: string): $BombEntity$BreakingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BombEntity$BreakingMode$Type = (("all") | ("none") | ("weak")) | ($BombEntity$BreakingMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BombEntity$BreakingMode_ = $BombEntity$BreakingMode$Type;
}}
declare module "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SconceWallBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SconceBlock, $SconceBlock$Type} from "packages/net/mehvahdjukaar/supplementaries/common/block/blocks/$SconceBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SconceWallBlock extends $SconceBlock {
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor<T extends $ParticleType<(any)>>(properties: $BlockBehaviour$Properties$Type, particleData: $Supplier$Type<(T)>)

public "animateTick"(stateIn: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canSurvive"(state: $BlockState$Type, worldIn: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SconceWallBlock$Type = ($SconceWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SconceWallBlock_ = $SconceWallBlock$Type;
}}
