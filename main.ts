
namespace signTools {

    /**
     * Places an oak sign at the given position with custom text.
     * @param pos the coordinates to place the sign
     * @param text the message for the sign, eg: "Hello!"
     */
    //% block="place sign at %pos with text %text"
    //% text.shadow="text"
    export function placeSign(pos: Position, text: string): void {
        // Ensure coordinates are whole numbers
        let x = Math.floor(pos.getValue(Axis.X));
        let y = Math.floor(pos.getValue(Axis.Y));
        let z = Math.floor(pos.getValue(Axis.Z));

        // This format is specific to Minecraft Education Edition (Bedrock)
        // It avoids the complex "rawtext" brackets that often cause syntax errors
        player.execute("say I am placing a very good sign at " + x + " " + y + " " + z + " saying " + text);
        let command = `setblock ${x} ${y} ${z} standing_sign 0 replace {"Text":"${text}"}`;

        player.execute(command);
    }
}