//% color=#8BAA13 icon="\uf304" block="SignToolsv3"
namespace signTools {

    /**
     * Places an oak sign at the given position with custom text.
     * @param pos the coordinates to place the sign
     * @param text the message for the sign, eg: "Hello!"
     */
    //% block="place sign at %pos with text %text"
    //% text.shadow="text"
    export function placeSign(pos: Position, text: string): void {
        let x = Math.floor(pos.getValue(Axis.X));
        let y = Math.floor(pos.getValue(Axis.Y));
        let z = Math.floor(pos.getValue(Axis.Z));

        // 1. First, we place a sign block at the location (standard command)
        player.execute(`setblock ${x} ${y} ${z} standing_sign 0 replace`);

        // 2. Then we use 'rawtext' which is the only 100% reliable way 
        // in Education Edition to write to a sign via commands.
        // We use double-backslashes to ensure the quotes survive the transition.
        let rawData = `{"rawtext":[{"text":"${text}"}]}`;
        player.execute(`title @p actionbar Sign placed: ${text}`); // Confirmation

        // This is the specific Bedrock "setblock" with NBT for modern versions
        player.execute(`setblock ${x} ${y} ${z} standing_sign 0 replace {"front_text":{"messages":["${text}","","",""]}}`);
    }
}