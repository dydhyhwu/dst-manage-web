import { CreateBadgeOptions } from './createBadgeOptions';
import { BadgeGenerator } from './badgeGenerator';
import { SquareBadgeGenerator } from './generators/squareBadgeGenerator';

const SquareGenerator = new SquareBadgeGenerator();

export { CreateBadgeOptions, BadgeGenerator, SquareGenerator };
