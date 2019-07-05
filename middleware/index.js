export default async function({ store, error, route, redirect }) {
  // サイドメニューバーのアクティブタグ変更
  await store.dispatch('pages/pageRouteActive', route.path)

  // レーシングのデータ取得
  if (route.path === '/racing' || route.path === '/racing/') {
    await store.dispatch('runners/fetchRunnersData')
    await store.dispatch('achievement/fetchAchievement')
    await store.dispatch('race-result/fetchRaceResults')
  }
}
