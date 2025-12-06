//% color=#ffaa00 icon="\uf185" weight=80 block="Grove-Sunlight-Sensor"
namespace Grove-Sunlight-Sensor {

    //% block="Initialisiere Sonnenlichtsensor" weight=100 blockGap=8
    export function initSunlight(): void {
        SI1151.initSunlight();
    }

    //% block="Licht Intensität (lm)" weight=90 blockGap=8
    export function lightIntensity(): number {
        return SI1151.getHalfWord_Visible();
    }

    //% block="zeige Lichtintensität auf LED" weight=80
    export function showLightOnLED(): void {
        basic.showNumber(lightIntensity());
    }
}

