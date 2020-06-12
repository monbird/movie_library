export default class Config {
    static readonly APP_VERSION: string;
    static readonly APPID: string;
    static readonly API_SERVER: string;
    static readonly APP_KEY: string;
    static readonly IMAGE_SERVERS: string[];
    static IMAGE_SERVER(index?: number): string;
    private static _IMAGE_SERVERS;
    private static _APP_KEY;
    private static _API_SERVER;
    private static _APPID;
    private static _APP_VERSION;
}
