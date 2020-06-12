export default class Config {
    static get APP_VERSION(): string {
        return this._APP_VERSION;
    }
    static get APPID(): string {
        return this._APPID;
    }
    static get API_SERVER(): string {
        return this._API_SERVER;
    }
    static get APP_KEY(): string {
        return this._APP_KEY;
    }
    static get IMAGE_SERVERS(): string[] {
        return this._IMAGE_SERVERS;
    }
    static IMAGE_SERVER(index: number = 0): string {
        index = index % Config.IMAGE_SERVERS.length;
        return this._IMAGE_SERVERS[index];
    }
    private static _IMAGE_SERVERS = [
        "https://1.fwcdn.pl",
        "https://2.fwcdn.pl",
        "https://3.fwcdn.pl",
        "https://ssl-gfx.filmweb.pl"
    ];
    private static _APP_KEY = 'qjcGhW2JnvGT9dfCt3uT_jozR3s';
    private static _API_SERVER = 'https://ssl.filmweb.pl/api?';
    private static _APPID = "android";
    private static _APP_VERSION = "1.0";
}