import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'


Nova.booting((app, store) => {
  app.component('index-nova-vimeo-field', IndexField)
  app.component('detail-nova-vimeo-field', DetailField)
  app.component('form-nova-vimeo-field', FormField)
})
