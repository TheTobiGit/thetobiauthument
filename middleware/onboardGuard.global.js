export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()
    const fName = user.value?.user_metadata?.First_Name;
  
    if (to.path === '/' && !fName) {
      return navigateTo('/auth/onboard')
    }
  })
  