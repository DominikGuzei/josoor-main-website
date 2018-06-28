import simpleTheme from 'react-polymorph/lib/themes/simple';
import { IDENTIFIERS } from 'react-polymorph/lib/themes/API';
import InputTheme from './custom/Input.scss';
import BubbleTheme from './custom/Bubble.scss';
import OptionsTheme from './custom/Options.scss';
import SelectTheme from './custom/Select.scss';
import CheckboxTheme from './custom/Checkbox.scss';
import SwitchTheme from './custom/Switch.scss';

export default Object.assign(simpleTheme, {
  [IDENTIFIERS.INPUT]: { ...InputTheme },
  [IDENTIFIERS.BUBBLE]: { ...BubbleTheme },
  [IDENTIFIERS.OPTIONS]: { ...OptionsTheme },
  [IDENTIFIERS.SELECT]: { ...SelectTheme },
  [IDENTIFIERS.CHECKBOX]: { ...CheckboxTheme },
  [IDENTIFIERS.SWITCH]: { ...SwitchTheme },
});
