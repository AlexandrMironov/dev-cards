// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { getLocale, setLocale } from '@wildberries/i18next-utils';
import {
  Dropdown,
  DropdownClickEventType,
  OptionType,
  Text,
  ArrowsChevronBottomIcon,
} from '@wildberries/ui-kit';
import { useState } from 'react';
import classnames from 'classnames/bind';
import { i18 } from '@/common/i18n';
import styles from './index.module.scss';

const OPTIONS = [
  { id: '1', value: 'ru', title: 'Русский' },
  { id: '2', value: 'en', title: 'Английский' },
];

const cn = classnames.bind(styles);

const BLOCK_NAME = 'SelectLanguageDropdown';

export const SelectLanguageDropdown = () => {
  const currentLocale = getLocale({ isFromCookie: true });
  const defaultOption = OPTIONS.find(
    (option) => option.value === currentLocale,
  );
  const [value] = useState<OptionType>(defaultOption);
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (selectValue: DropdownClickEventType) => {
    setLocale({ locale: selectValue.value.value, isFromCookie: true });
    window.location.reload();
  };

  return (
    <div className={cn(BLOCK_NAME)}>
      <div
        className={cn(`${BLOCK_NAME}__label`)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text color="richGrey" text={i18(value.title)} />
        <div
          className={cn(
            isOpen ? `${BLOCK_NAME}__icon__rotate` : `${BLOCK_NAME}__icon`,
          )}
        >
          <ArrowsChevronBottomIcon colorType="normalGreyColor" />
        </div>
      </div>

      {isOpen && (
        <div className={cn(`${BLOCK_NAME}__dropdown`)}>
          <Dropdown
            items={OPTIONS}
            onChange={onChange}
            selectedItems={[value]}
            withSearch={false}
          />
        </div>
      )}
    </div>
  );
};
