import { WebCryptoError } from "webcrypto-core";

export class LinerError extends WebCryptoError {
    public static MODULE_NOT_FOUND = "Module '%1' is not found. Download it from %2";
    public static UNSUPPORTED_ALGORITHM = "Unsupported algorithm '%1'";

    public code = 10;
}
