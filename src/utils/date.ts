import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

moment.updateLocale('ru', {
  monthsShort : [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн',
    'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
  ]
});

export default moment;
