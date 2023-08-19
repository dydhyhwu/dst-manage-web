import { CreateBadgeOptions } from './createBadgeOptions';

export interface BadgeGenerator {
    /**
     * TODO： 这里动态根据传入的内容来，不局限于两个
     * @param options
     */
    create(options: CreateBadgeOptions): string;
}
