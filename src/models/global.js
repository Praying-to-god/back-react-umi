export default {
  namespaced: 'global',
  state: {
    menus: [
      { id: 1, icon: 'video-camera', name: 'Welcome', href: '/' },
      { id: 2, icon: 'user', name: '用户管理', href: '/user/manage' },
    ],
  },
};
