// Helper utilities for common functionality

export const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export const isValidEmail = (email: string): boolean => {
  return /\S+@\S+\.\S+/.test(email)
}

