namespace SunlightSensor {

    //% blockId=sunlight_init
    //% block="Initialisiere Sonnenlichtsensor"
    export function init(): void {
        SI1151.initSunlight();
    }

    //% blockId=sunlight_get_lux
    //% block="Licht Intensität (lm)"
    //% blockNamespace=SunlightSensor
    export function getLightIntensityLm(): number {
        return SI1151.getHalfWord_Visible();
    }

    //% blockId=sunlight_show_lux
    //% block="zeige Lichtintensität (lm) auf LEDs"
    //% blockNamespace=SunlightSensor
    export function showLightOnLeds(): void {
        const value = getLightIntensityLm();
        basic.showNumber(value);
    }
}
