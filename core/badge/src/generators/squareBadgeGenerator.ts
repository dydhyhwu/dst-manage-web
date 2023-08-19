import { BadgeGenerator } from '../badgeGenerator';
import { BadgeBuildOptions } from '../BadgeBuildOptions';
import { CreateBadgeOptions } from '../createBadgeOptions';

/**
 * 方形徽章
 */
export class SquareBadgeGenerator implements BadgeGenerator {
    /**
     * 转移XML字符
     * @param content
     * @private
     */
    private escapeXmlCharter(content: string): string {
        return content
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
    }

    /**
     * 计算字符宽度
     * @param content
     * @private
     */
    private calculateTextWidth(content: string): number {
        let count = 0;
        const len = content.length;
        for (let i = 0; i < len; i++) {
            count += content.charCodeAt(i) < 256 ? 1 : 2;
        }
        return count * 6 + 20;
    }

    private getBuildOption(text: string, color: string): BadgeBuildOptions {
        const escapeText = this.escapeXmlCharter(text);
        return { text: escapeText, color: color, width: this.calculateTextWidth(escapeText) };
    }

    create(options: CreateBadgeOptions): string {
        const left = this.getBuildOption(options.leftText, options.leftColor || '#555');
        const right = this.getBuildOption(options.rightText || 'none', options.rightColor || '#44cc11');
        const width = left.width + right.width;
        const height = 20;

        return `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'>
                  <rect width='${width}' height='20' fill='${left.color}'/>
                  <rect x='${left.width}' width='${right.width}' height='20' fill='${right.color}'/>
                  <rect x='${left.width}' width='4' height='20' fill='${right.color}'/>
                  <rect width='${width}' height='20' fill-opacity='.1'/>
                  <g fill='#fff' text-anchor='middle' font-family='DejaVu Sans,Verdana,Geneva,sans-serif' font-size='11'>
                    <text x='${left.width / 2 + 1}' y='14'>${left.text}</text>
                    <text x='${left.width + right.width / 2 - 1}' y='14'>${right.text}</text>
                  </g>
                </svg>`;
    }
}
