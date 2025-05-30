import { z } from "zod";
import { imageMimeTypeEnum } from "./imageMimeType";
import { videoMimeTypeEnum } from "./videoMimeType";

/**
 * Possible variants of the type of an attachement of an event.
 */
export const eventAttachmentMimeTypeEnum = z.enum([
	...imageMimeTypeEnum.options,
	...videoMimeTypeEnum.options,
]);
