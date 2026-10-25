/**
 * Photography via Unsplash. Every URL below was verified live
 * (HTTP 200, image content-type) and visually reviewed before use —
 * see BUILD_LOG.md for the verification record.
 */
const u = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  hero: u("1544367567-0f2fcb009e0b", 1600), // lunge silhouette, sunset over the sea
  bandStudio: u("1506126613408-eca07ce68773", 1600), // seated meditation at sunrise
  bandLandscape: u("1506744038136-46273834b3fb", 1600), // river valley at dawn
  visit: u("1582719478250-c89cae4dc85b", 1600), // sunlit, unhurried room

  hatha: u("1487241281672-301e0f542588", 900), // grounded pose by a window
  vinyasa: u("1518186285589-2f7649de83e0", 900), // tree pose on the beach
  yin: u("1501616268023-ef36eddeb2e4", 900), // deep forward fold, at home
  breathwork: u("1552693673-1bf958298935", 900), // hands in mudra, black & white
  sunrise: u("1545205597-3d9d02c29597", 900), // morning group practice on the sand
  prenatal: u("1526256262350-7da7584cf5eb", 900), // resting cross-legged in sunlight

  teacherMaya: u("1438761681033-6461ffad8d80", 900),
  teacherJonah: u("1507003211169-0a1dd7228f2d", 900),
  teacherPriya: u("1494790108377-be9c29b29330", 900),
  teacherTomas: u("1472099645785-5658abf4ff4e", 900),
};
