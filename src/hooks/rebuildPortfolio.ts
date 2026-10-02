export const rebuildPortfolio = async () => {
  const url = process.env.PORTFOLIO_DEPLOY_HOOK
  if (!url) return
  try {
    await fetch(url, { method: 'POST' })
  } catch (e) {
    console.error('No se pudo avisar al portfolio', e)
  }
}
