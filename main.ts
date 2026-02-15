/**
 * Custom blocks for placing signs with text
 */
// % weight=100 color=#8B4513 icon="\uf304" block="Sign Tools"
namespace SignBoard {

    /**
     * Places a standing oak sign at a position with custom text on the first line.
     * @param text the text to write on the sign, eg: "Hello!"
     * @param pos the coordinates to place the sign
     */
    // % block="place sign at %pos with text %text"
    // % text.shadow="text"
    export function placeSign(pos: Position, text: string): void {
        // We calculate absolute coordinates to ensure the command hits the right spot
        let x = Math.floor(pos.getValue(Axis.X));
        let y = Math.floor(pos.getValue(Axis.Y));
        let z = Math.floor(pos.getValue(Axis.Z));

        // This is the Bedrock-specific JSON string for sign data
        // We use double-backslashes to "escape" the quotes for the game engine
        let rawData = `{"Text1":"${text}"}`;
        let command = `setblock ${x} ${y} ${z} standing_sign 0 replace ${rawData}`;

        player.execute(command);
    }
}