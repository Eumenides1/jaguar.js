"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const frontmatter = {
  "title": "custom title"
};
const toc = [{
  "id": "autolink-literals-1",
  "text": "Autolink literals",
  "depth": 2
}, {
  "id": "footnote-1",
  "text": "Footnote",
  "depth": 2
}, {
  "id": "strikethrough-1",
  "text": "Strikethrough",
  "depth": 2
}, {
  "id": "table-1",
  "text": "Table",
  "depth": 2
}, {
  "id": "tasklist-1",
  "text": "Tasklist",
  "depth": 2
}];
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    sup: "sup",
    del: "del",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td",
    ul: "ul",
    li: "li",
    input: "input",
    div: "div",
    span: "span",
    pre: "pre",
    code: "code",
    section: "section",
    ol: "ol"
  }, props.components);
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "gfm",
      children: [jsxRuntime.jsx(_components.a, {
        className: "header-anchor",
        href: "#gfm",
        children: "#"
      }), "GFM"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "autolink-literals",
      children: [jsxRuntime.jsx(_components.a, {
        className: "header-anchor",
        href: "#autolink-literals",
        children: "#"
      }), "Autolink literals"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: [jsxRuntime.jsx(_components.a, {
        href: "http://www.example.com",
        children: "www.example.com"
      }), ", ", jsxRuntime.jsx(_components.a, {
        href: "https://example.com",
        children: "https://example.com"
      }), ", and ", jsxRuntime.jsx(_components.a, {
        href: "mailto:contact@example.com",
        children: "contact@example.com"
      }), "."]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "footnote",
      children: [jsxRuntime.jsx(_components.a, {
        className: "header-anchor",
        href: "#footnote",
        children: "#"
      }), "Footnote"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["A note", jsxRuntime.jsx(_components.sup, {
        children: jsxRuntime.jsx(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "1"
        })
      })]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "strikethrough",
      children: [jsxRuntime.jsx(_components.a, {
        className: "header-anchor",
        href: "#strikethrough",
        children: "#"
      }), "Strikethrough"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: [jsxRuntime.jsx(_components.del, {
        children: "one"
      }), " or ", jsxRuntime.jsx(_components.del, {
        children: "two"
      }), " tildes."]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "table",
      children: [jsxRuntime.jsx(_components.a, {
        className: "header-anchor",
        href: "#table",
        children: "#"
      }), "Table"]
    }), "\n", jsxRuntime.jsxs(_components.table, {
      children: [jsxRuntime.jsx(_components.thead, {
        children: jsxRuntime.jsxs(_components.tr, {
          children: [jsxRuntime.jsx(_components.th, {
            children: "a"
          }), jsxRuntime.jsx(_components.th, {
            align: "left",
            children: "b"
          }), jsxRuntime.jsx(_components.th, {
            align: "right",
            children: "c"
          }), jsxRuntime.jsx(_components.th, {
            align: "center",
            children: "d"
          })]
        })
      }), jsxRuntime.jsx(_components.tbody, {
        children: jsxRuntime.jsxs(_components.tr, {
          children: [jsxRuntime.jsx(_components.td, {
            children: "1"
          }), jsxRuntime.jsx(_components.td, {
            align: "left",
            children: "2"
          }), jsxRuntime.jsx(_components.td, {
            align: "right",
            children: "3"
          }), jsxRuntime.jsx(_components.td, {
            align: "center",
            children: "4"
          })]
        })
      })]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "tasklist",
      children: [jsxRuntime.jsx(_components.a, {
        className: "header-anchor",
        href: "#tasklist",
        children: "#"
      }), "Tasklist"]
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      className: "contains-task-list",
      children: ["\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "to do"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "to do"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        className: "task-list-item",
        children: [jsxRuntime.jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n"]
    }), "\n", jsxRuntime.jsxs(_components.div, {
      className: "language-ts",
      children: [jsxRuntime.jsx(_components.span, {
        className: "lang",
        children: "ts"
      }), jsxRuntime.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntime.jsxs(_components.code, {
          children: [jsxRuntime.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Plugin"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vite"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "pluginMdxRollup"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "./pluginMdxRollup"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntime.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "async"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "pluginMdx"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Promise"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Plugin"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "[]"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ">"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "await"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "pluginMdxRollup"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()]"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            className: "line",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", "\n", jsxRuntime.jsxs(_components.section, {
      "data-footnotes": true,
      className: "footnotes",
      children: [jsxRuntime.jsxs(_components.h2, {
        className: "sr-only",
        id: "footnote-label",
        children: [jsxRuntime.jsx(_components.a, {
          className: "header-anchor",
          href: "#footnote-label",
          children: "#"
        }), "Footnotes"]
      }), "\n", jsxRuntime.jsxs(_components.ol, {
        children: ["\n", jsxRuntime.jsxs(_components.li, {
          id: "user-content-fn-1",
          children: ["\n", jsxRuntime.jsxs(_components.p, {
            children: ["Big note. 133 ", jsxRuntime.jsx(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": true,
              className: "data-footnote-backref",
              "aria-label": "Back to content",
              children: "↩"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
exports.default = MDXContent;
exports.frontmatter = frontmatter;
exports.toc = toc;
