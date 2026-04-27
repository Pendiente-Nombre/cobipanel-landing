export interface Project {
  id: string
  name: string
  client: string
  location: string
  state: string
  category: string
  description: string
  scope: string
  principalImage: string
  galleryImages: string[]
  isPending?: boolean
}
