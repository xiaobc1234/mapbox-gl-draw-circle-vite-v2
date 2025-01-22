const moduleExports = {
  enable(ctx) {
    setTimeout(() => {
      if (!ctx.map?.dragPan || !ctx._ctx?.store?.getInitialConfigValue) return;
      if (!ctx._ctx.store.getInitialConfigValue('dragPan')) return;
      ctx.map.dragPan.enable();
    }, 0);
  },
  disable(ctx) {
    setTimeout(() => {
      if (!ctx.map?.dragPan) return;
      ctx.map.dragPan.disable();
    }, 0);
  },
};

export default moduleExports;
