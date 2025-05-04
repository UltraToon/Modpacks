declare module "packages/com/ilexiconn/llibrary/server/animation/$Animation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Animation {


public static "create"(arg0: integer): $Animation
/**
 * 
 * @deprecated
 */
public static "create"(arg0: integer, arg1: integer): $Animation
/**
 * 
 * @deprecated
 */
public "getID"(): integer
public "getDuration"(): integer
public "doesLoop"(): boolean
public "setLooping"(arg0: boolean): $Animation
get "iD"(): integer
get "duration"(): integer
set "looping"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Type = ($Animation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation_ = $Animation$Type;
}}
declare module "packages/com/ilexiconn/llibrary/server/animation/$IAnimatedEntity" {
import {$Animation, $Animation$Type} from "packages/com/ilexiconn/llibrary/server/animation/$Animation"

export interface $IAnimatedEntity {

 "setAnimationTick"(arg0: integer): void
 "setAnimation"(arg0: $Animation$Type): void
 "getAnimations"(): ($Animation)[]
 "getAnimationTick"(): integer
 "getAnimation"(): $Animation
}

export namespace $IAnimatedEntity {
const NO_ANIMATION: $Animation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAnimatedEntity$Type = ($IAnimatedEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAnimatedEntity_ = $IAnimatedEntity$Type;
}}
