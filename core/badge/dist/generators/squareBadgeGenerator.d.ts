import { BadgeGenerator } from '../badgeGenerator';
import { CreateBadgeOptions } from '../createBadgeOptions';
/**
 * 方形徽章
 */
export declare class SquareBadgeGenerator implements BadgeGenerator {
    /**
     * 转移XML字符
     * @param content
     * @private
     */
    private escapeXmlCharter;
    /**
     * 计算字符宽度
     * @param content
     * @private
     */
    private calculateTextWidth;
    private getBuildOption;
    create(options: CreateBadgeOptions): string;
}
