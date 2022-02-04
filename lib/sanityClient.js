import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'b0xu00ny',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skWRvxyJuIse8aw1VXmZT2eXUZ3kk8SIzMsRumRh2dboD55B5ADzigJpuAOKwJ58Tj9oR9icfQqJIY1CEdO5Rd78fSiqrKVWh9OBG3N5Sj0XYAsxj3CNbIOzv8ilHaP1pQHq7ltRDFKaZFHvspPpPiiXO1iyrKsZ19zwauBDAaBiQISx7mrg',
  useCdn: false,
})
