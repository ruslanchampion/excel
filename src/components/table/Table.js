import {ExcelComponents} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'

export class Table extends ExcelComponents {
  static className = 'excel__table'

  toHTML() {
    return createTable()
  }
}
