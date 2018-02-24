const query = () =>
  document.location.search
    .substring(1)
    .split(/&/)
    .map(pair => pair.split(/=/))

const queryHas = flag =>
  query().filter(([k, v]) => k === flag && ['1', 'true'].indexOf(v) >= 0)
    .length > 0

export const isDebugging = () => queryHas('debug')

export const isLooping = () => queryHas('loop')
