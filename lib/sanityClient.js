import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'q309gflu',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skTrKwFWyghNIajSsn4os8GToJx9vszx5K0R7ZrCM5wEZOZ3RFsbXrNyzVeSKzIuKhLIGZlxrdKQnsQHwJJtQvW9GFd2wjriMh5rzqWEo6DBAkExEo9NrnM4CqUpA0jXbRYWMVPKD0gYeFLEqM936div5F1vYG8EnnNJV89q9N1iu7FddwHC',
    useCdn: false
})

