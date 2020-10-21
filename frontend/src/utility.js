const GETSETTINGS = { url: "/settings", method: "get" };
const UPDATESETTINGS = { url: "/settings", method: "put" };
const ADDSETTINGS = { url: "/settings", method: "post" };
const GETKEYWORDS = { url: "/keywords", method: "get" };
const GETSITES = { url: "/sites", method: "get" };
const ADDSITES = { url: "/sites", method: "post" };
const ADDKEYWORD = { url: "/keywords", method: "post" };
const DELETEKEYWORDS = {
  url: "/keywords",
  method: "delete",
};
const DELETESITES = { url: "/sites", method: "delete" };

module.exports = {
  GETKEYWORDS,
  GETSETTINGS,
  GETSITES,
  UPDATESETTINGS,
  ADDSETTINGS,
  ADDSITES,
  ADDKEYWORD,
  DELETEKEYWORDS,
  DELETESITES,
};
