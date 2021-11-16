/** External Dependencies */
import { FineTune, Annotate } from '@scaleflex/icons';

/** Internal Dependencies */
import { Filters, Resize, Watermark, Adjust } from 'components/common/icons';
import { TABS_IDS } from 'utils/constants';

export const AVAILABLE_TABS = [
  {
    id: TABS_IDS.ADJUST,
    label: 'Adjust',
    icon: Adjust,
  },
  {
    id: TABS_IDS.FINETUNE,
    label: 'Finetune',
    icon: FineTune,
  },
  {
    id: TABS_IDS.FILTERS,
    label: 'Filters',
    icon: Filters,
  },
  {
    id: TABS_IDS.WATERMARK,
    label: 'Watermark',
    icon: Watermark,
  },
  {
    id: TABS_IDS.ANNOTATE,
    label: 'Annotate',
    icon: Annotate,
  },
  {
    id: TABS_IDS.RESIZE,
    label: 'Resize',
    icon: Resize,
  },
];