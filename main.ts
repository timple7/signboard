//% color=#8B4500 icon="\uf304" block="Sign Tools"
namespace signTools {

    /**
     * Places a sign at coordinates
     */
    //% block="place sign at %pos with text %text"
    export function placeSign(pos: Position, text: string): void {
        let x = Math.floor(pos.getValue(Axis.X));
        let y = Math.floor(pos.getValue(Axis.Y));
        let z = Math.floor(pos.getValue(Axis.Z));

        // 1. Place the sign first
        // player.execute(`setblock ${x} ${y} ${z} standing_sign 0 replace`);

        // 2. Use the 'title' or 'say' command logic is hard, 
        // so we use the Bedrock "Rawtext" format which is more stable:
        // let command = `setblock ${x} ${y} ${z} standing_sign 0 replace {"Text1":"${text}"}`;

        // player.execute(command);
        player.execute("say I am placing a good sign at " + x + " " + y + " " + z + "saying" + text);
        player.execute(`setblock ${x} ${y} ${z} standing_sign 0 replace {"Text1":"${text}"}`);
    }
}
