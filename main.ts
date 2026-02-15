//% color=#8B4513 icon="\uf304" block="Sign Tools"
namespace signTools {

    /**
     * Places a sign at coordinates
     */
    //% block="place sign at %pos with text %text"
    export function placeSign(pos: Position, text: string): void {
        let x = Math.floor(pos.getValue(Axis.X));
        let y = Math.floor(pos.getValue(Axis.Y));
        let z = Math.floor(pos.getValue(Axis.Z));
        player.execute(`setblock ${x} ${y} ${z} standing_sign 0 replace {"Text1":"{\\"text\\":\\"${text}\\"}"}`);
    }
}
