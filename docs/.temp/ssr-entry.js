"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const jsxRuntime = require("react/jsx-runtime");
const server = require("react-dom/server");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
const jsxRuntime__namespace = /* @__PURE__ */ _interopNamespaceDefault(jsxRuntime);
const Fragment = jsxRuntime__namespace.Fragment;
const jsx = jsxRuntime__namespace.jsx;
const jsxs = jsxRuntime__namespace.jsxs;
function Counter() {
  const [count, setCount] = React.useState(0);
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("p", {
      children: count
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => setCount((count2) => count2 + 1),
      children: "点击加1"
    })]
  });
}
const Counter$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Counter
}, Symbol.toStringTag, { value: "Module" }));
function B$1() {
  return /* @__PURE__ */ jsx("div", {
    children: "Hello, route B"
  });
}
const b$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: B$1
}, Symbol.toStringTag, { value: "Module" }));
function A() {
  return /* @__PURE__ */ jsx("div", {
    children: "Hello, route A"
  });
}
const a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: A
}, Symbol.toStringTag, { value: "Module" }));
function B() {
  return /* @__PURE__ */ jsx("div", {
    children: "Hello, route B"
  });
}
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: B
}, Symbol.toStringTag, { value: "Module" }));
function C() {
  return /* @__PURE__ */ jsx("div", {
    children: "Hello, route C"
  });
}
const c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: C
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = void 0;
const toc$1 = [{
  "id": "所以他还可以做什么",
  "text": "所以，他还可以做什么？",
  "depth": 2
}, {
  "id": "从搜索功能说起",
  "text": "从搜索功能说起",
  "depth": 2
}, {
  "id": "如何让ai搜索更智能---embedding",
  "text": "如何让Ai搜索更智能 - Embedding",
  "depth": 2
}, {
  "id": "如何让ai获取外部资料库---llama-index-",
  "text": "如何让Ai获取外部资料库 -**** Llama Index ****",
  "depth": 2
}, {
  "id": "bing是如何做的",
  "text": "Bing是如何做的",
  "depth": 3
}, {
  "id": "通过-llama_index-封装第二大脑",
  "text": "通过 llama_index 封装“第二大脑”",
  "depth": 3
}, {
  "id": "如何链式调用",
  "text": "如何链式调用",
  "depth": 2
}, {
  "id": "链式调用有什么用",
  "text": "链式调用有什么用",
  "depth": 3
}];
function _createMdxContent$1(props) {
  const _components = Object.assign({
    p: "p",
    h2: "h2",
    a: "a",
    hr: "hr",
    h3: "h3",
    ul: "ul",
    li: "li",
    div: "div",
    span: "span",
    pre: "pre",
    code: "code"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "我们已经到了2023年，你难道还没有听说过ChatGPT吗！"
    }), "\n", jsx(_components.p, {
      children: "到底什么是ChatGPT？"
    }), "\n", jsx(_components.p, {
      children: "是一个问答系统？它拥有强大的搜索功能；在这个信息爆炸的时代，ChatGPT可以帮助你快速找到你需要的信息。"
    }), "\n", jsx(_components.p, {
      children: "是一个搜索引擎？ChatGPT可以根据你的搜索关键词，自动匹配并推荐相关的答案。这让你可以省去繁琐的手动搜索，节省时间和精力。"
    }), "\n", jsx(_components.p, {
      children: "是一个Ai工具？ChatGPT还可以学习用户的搜索习惯和反馈，逐渐提高自己的搜索准确度和效率。这使得ChatGPT成为了一个越用越顺手的工具。"
    }), "\n", jsx(_components.p, {
      children: "无论是谁，相信在第一次使用ChatGPT的时候，都惊艳于他的智能；那么然后呢？我能用他做什么呢？提高工作效率，增加摸鱼时间？但其实在使用过程中你会发现，GPT提供的答案偶尔是天马行空的，Check Answer的心智负担增加了；再者，ChatGPT惊艳的编码功能也只局限于单文件，单问题，他确实带来了一些效能提升，但是说释放生产力，还有一定的距离。"
    }), "\n", jsx(_components.p, {
      children: "Ai元年，跨时代的产物，就这？"
    }), "\n", jsxs(_components.h2, {
      id: "所以他还可以做什么",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#所以他还可以做什么",
        children: "#"
      }), "所以，他还可以做什么？"]
    }), "\n", jsx(_components.p, {
      children: "不知道，你在使用完ChatGPT后，有想到用他来做什么呢？去做一个号商 😂去做一个手摸手教你申请账号的韭菜老师？ 🙅🏻哒咩！"
    }), "\n", jsx(_components.p, {
      children: "不得不说，行业属性是一个程序猿工作之后脱不掉的标签；我原就职于一个大型连锁餐饮品牌的数字化业务中心，也就是客服中心；对于餐饮客服的敏感度还是有的，我第一时间想到的就是 ** 智能客服。**"
    }), "\n", jsx(_components.p, {
      children: "现在的客服是如何工作的，以Yum的在线客服为例，前置会有一道上时代Ai智能客服，通过多轮的对话，获取所需数据，调用业务API去获取结果，处理部分业务；如果无法检索到或者业务敏感则转人工处理，对于人工客服，他们会有一个知识库，积年累月的沉淀了客服所能遇到的大部分问题，当用户提问，客服就去知识库中手动搜索，然后回复给客户。"
    }), "\n", jsx(_components.p, {
      children: "新Ai时代，ChatGPT是否能够作为前置Ai，解决掉用户大部分的问题，释放客服人力呢？答案当然是可以的，通过上面的描述，很明显，我们需要解决的问题其实不多，如何让Ai能去读我们自定义的知识库以及如何让Ai能够知道什么样的问题去寻找怎样的答案。"
    }), "\n", jsx(_components.p, {
      children: "理论存在，实践开始！"
    }), "\n", jsxs(_components.h2, {
      id: "从搜索功能说起",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#从搜索功能说起",
        children: "#"
      }), "从搜索功能说起"]
    }), "\n", jsx(_components.p, {
      children: "传统的搜索引擎是通过分析网页内容和链接来为用户提供有关搜索词的结果。 对于像腾讯、百度这样的大公司有很多内部复杂的策略和模型，通过复杂的算法使用大量的数据来分析用户的搜索历史，地理位置和其他因素，以便提供更加个性化的搜索结果。此外，搜索引擎还可以使用自然语言处理技术来理解用户的意图，从而提供更加精确的搜索结果。"
    }), "\n", jsx(_components.p, {
      children: "但通俗来讲，在不引入Ai算法之前，基础的搜索引擎就是使用Elasticsearch的先分词再倒排索引的办法来进行搜索的。简单来说，对于“芝士猪柳蛋帕尼尼”(ps:👻还挺好吃的)拆分成“芝士”，“猪柳”，“蛋”，“帕尼尼”，每个标题都是这样切分。然后，建立一个索引，比如“芝士”这个词，出现过的标题的编号，都按编号顺序跟在气质后面。其他的词也类似。"
    }), "\n", jsx(_components.p, {
      children: "然后，当用户搜索的时候，比如用户搜索“芝士帕尼尼”，也会拆分成“芝士”和“帕尼尼”两个词。然后就根据这两个词，找到包含这些词的标题，根据出现的词的数量、权重等等找出一些商品。"
    }), "\n", jsx(_components.p, {
      children: "但是，这个策略有一个缺点，就是如果我们有同义词，那么这么简单地去搜索是搜不到的。比如，我们如果搜“牛柳蛋帕尼尼”，虽然语义上很接近，但是因为“牛柳”这个词在这个商品标题里都没有出现，所以就没有办法匹配上了。为了提升搜索效果，你就得做更多的工程研发工作，比如找一个同义词表，把标题里出现的同义词也算上等等。"
    }), "\n", jsx(_components.p, {
      children: "这时候，ChatGPT的Embedding就来了～"
    }), "\n", jsxs(_components.h2, {
      id: "如何让ai搜索更智能---embedding",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#如何让ai搜索更智能---embedding",
        children: "#"
      }), "如何让Ai搜索更智能 - Embedding"]
    }), "\n", jsx(_components.p, {
      children: "什么是Embedding？他是将离散的数据转换为连续的向量表示，即将对象映射到一个低维向量空间中。在自然语言处理中，可以将每个单词或字符转换为一个向量表示，使得计算机可以更好地处理自然语言。而ChatGPT中的Embedding是指将单词转换为向量表示的过程，其中采用的是Transformer模型，能够在保留上下文信息的同时，将每个单词表示为一个固定长度的向量。"
    }), "\n", jsx(_components.p, {
      children: "说人话就是说：我们就可以把一段文本的语义表示成一段向量。而向量之间是可以计算距离的，如果我们把用户的搜索，也通过 Embedding 接口变成向量。然后把它和所有的商品的标题计算一下余弦距离，找出离我们搜索词最近的几个向量。那最近的几个向量，其实就是语义和这个商品相似的，而并不一定需要相同的关键词。"
    }), "\n", jsx(_components.hr, {}), "\n", jsxs(_components.h2, {
      id: "如何让ai获取外部资料库---llama-index-",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#如何让ai获取外部资料库---llama-index-",
        children: "#"
      }), "如何让Ai获取外部资料库 -**** Llama Index ****"]
    }), "\n", jsx(_components.p, {
      children: "有些信息和问题我们只想提供给自己公司的内部使用，并不想开放给所有人。这个时候，我们既希望能够利用 OpenAI 的大语言模型的能力，但是又需要这些能力仅仅在我们自己指定的数据上。那么这个问题如何解决呢？"
    }), "\n", jsx(_components.p, {
      children: "在使用GPT的时候，不知道你有没有问过他“马云的儿子是谁”，不同人问的这个问题，会得到不同的各种答案，之所以会出现这样的情况，和大模型的原理以及它使用训练的数据集是有关的。大语言模型的原理，就是利用训练样本里面出现的文本的前后关系，通过前面的文本对接下来出现的文本进行概率预测。如果类似的前后文本出现得越多，那么这个概率在训练过程里会收敛到少数正确答案上，回答就准确。如果这样的文本很少，那么训练过程里就会有一定的随机性，对应的答案就容易似是而非。而在 GPT - 3 的模型里，虽然整体的训练语料很多，但是中文语料很少。只有不到 1 % 的语料是中文的，所以如果问很多中文相关的知识性或者常识性问题，它的回答往往就很扯。"
    }), "\n", jsx(_components.p, {
      children: "当然，你可以说我们有一个解决办法，就是多找一些高质量的中文语料训练一个新的模型。或者，对于我们想让 AI 能够回答出来的问题，找一些数据。然后利用 OpenAI 提供的“微调”（Fine - tune）接口，在原来的基础上训练一个新模型出来。"
    }), "\n", jsx(_components.p, {
      children: "这样当然是可以的，就是成本有点高。对于上面那个例子来说，只是缺少一些文本数据，还好说。如果是时效性要求比较强的资讯类的信息，就很难这么做。比如，我们想让 AI 告诉我们十分钟前用户下了一单KFC订单，我们不太可能每隔几分钟就单独训练或者微调一下模型，那样干的成本太高了。"
    }), "\n", jsxs(_components.h3, {
      id: "bing是如何做的",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#bing是如何做的",
        children: "#"
      }), "Bing是如何做的"]
    }), "\n", jsx(_components.p, {
      children: "有朋友会说，之前微软不是在 Bing 这个搜索引擎里，加上了 ChatGPT 的问答功能吗？效果似乎也还不错，那 Bing 是怎么做到的呢，是因为他们用了更加厉害的语言模型吗？"
    }), "\n", jsx(_components.p, {
      children: "虽然我并没有什么内幕消息，不了解 Bing 是怎么做的。但是如果是我的话，会用这样一个解决办法——那就是先搜索，后提示（Prompt）。"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "我们先通过搜索的方式，找到和询问的问题最相关的语料。这个搜索过程中，我们既可以用传统的基于关键词搜索的技术，也可以用 Embedding 的相似度进行语义搜索的技术。"
      }), "\n", jsx(_components.li, {
        children: "然后，我们将和问题语义最接近的前几条内容，作为提示语的一部分给到 AI。然后请 AI 参考这些内容，再来回答这个问题。"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "这也是利用大语言模型的一个常见模式。因为大语言模型其实内含了两种能力。"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "第一种，是海量的语料中，本身已经包含了的知识信息。比如，我们前面问 AI 鱼香肉丝的做法，它能回答上来就是因为语料里已经有了充足的相关知识。我们一般称之为“世界知识”。"
      }), "\n", jsx(_components.li, {
        children: "第二种，是根据你输入的内容，理解和推理的能力。这个能力，不需要训练语料里有一样的内容。而是大语言模型本身有“思维能力”，能够进行阅读理解。这个过程里，“知识”不是模型本身提供的，而是我们找出来，临时提供给模型的。如果不提供这个上下文，再问一次模型相同的问题，它还是答不上来的。"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "通过-llama_index-封装第二大脑",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#通过-llama_index-封装第二大脑",
        children: "#"
      }), "通过 llama_index 封装“第二大脑”"]
    }), "\n", jsx(_components.p, {
      children: "我给上面这种先搜索、后提示的方式，取了一个名字，叫做 AI 的“第二大脑”模式。因为这个方法，需要提前把你希望 AI 能够回答的知识，建立一个外部的索引，这个索引就好像 AI 的“第二个大脑”。每次向 AI 提问的时候，它都会先去查询一下这个第二大脑里面的资料，找到相关资料之后，再通过自己的思维能力来回答问题。实际上，你现在在网上看到的很多读论文、读书回答问题的应用，都是通过这个模式来实现的。那么，现在我们就来自己实现一下这个“第二大脑”模式。"
    }), "\n", jsx(_components.p, {
      children: "不过，我们不必从 0 开始写代码。因为这个模式实在太过常用了，所以有人为它写了一个开源 Python 包，叫做 llama - index。"
    }), "\n", jsx(_components.p, {
      children: "这是一段使用的基本示例："
    }), "\n", jsxs(_components.div, {
      className: "language-python",
      children: [jsx(_components.span, {
        className: "lang",
        children: "python"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " openai"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " os"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " llama_index "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " GPTVectorStoreIndex"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " SimpleDirectoryReader"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "openai"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "api_key "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " os"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "environ"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "get"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "OPENAI_API_KEY"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "documents "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "SimpleDirectoryReader"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "./data/mr_fujino"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "load_data"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "index "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " GPTSimpleVectorIndex"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "from_documents"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "documents"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "index"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "save_to_disk"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "index_mr_fujino.json"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "首先，我们通过一个叫做 SimpleDirectoryReader 的数据加载器，将整个./ data / mr_fujino 的目录给加载进来。这里面的每一个文件，都会被当成是一篇文档。"
      }), "\n", jsx(_components.li, {
        children: "然后，我们将所有的文档交给了 GPTSimpleVectorIndex 构建索引。顾名思义，它会把文档分段转换成一个个向量，然后存储成一个索引。"
      }), "\n", jsx(_components.li, {
        children: "最后，我们会把对应的索引存下来，存储的结果就是一个 json 文件。后面，我们就可以用这个索引来进行相应的问答。"
      }), "\n"]
    }), "\n", jsx(_components.hr, {}), "\n", jsxs(_components.h2, {
      id: "如何链式调用",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#如何链式调用",
        children: "#"
      }), "如何链式调用"]
    }), "\n", jsx(_components.p, {
      children: "整个ChatGPT对外其实只提供了简简单单的 Completion 和 Embedding 这样两个核心接口；通过组合这两个接口，其实已经能够做很多事情了"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "通过提示语（Prompt）里包含历史的聊天记录，我们能够让 AI 根据上下文正确地回答问题。"
      }), "\n", jsx(_components.li, {
        children: "通过将 Embedding 提前索引好存起来，我们能够让 AI 根据外部知识回答问题。"
      }), "\n", jsx(_components.li, {
        children: "通过多轮对话，将 AI 返回的答案放在新的问题里，我们能够让 AI 帮我们给自己的代码撰写单元测试。"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "这些方法，也是一个实用的自然语言类应用里常见的模式。我之前也都通过代码为你演示过具体的做法。但是，如果我们每次写应用的时候，都需要自己再去 OpenAI 提供的原始 API 里做一遍，那就太麻烦了。于是，开源社区就有人将这些常见的需求和模式抽象了出来，开发了一个叫做 Langchain 的开源库。"
    }), "\n", jsxs(_components.h3, {
      id: "链式调用有什么用",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#链式调用有什么用",
        children: "#"
      }), "链式调用有什么用"]
    }), "\n", jsx(_components.p, {
      children: "我们知道，GPT - 3 的基础模型里面，中文的语料很少。用中文问它问题，很多时候它回答得不好。所以有时候，我会迂回处理一下，先把中文问题给 AI，请它翻译成英文，然后再把英文问题贴进去提问，得到一个英文答案。最后，再请 AI 把英文答案翻译回中文，但是每次都需要去提问三次，对于我们来说，实在是一个不太友好且成本很高的事情。"
    }), "\n", jsx(_components.p, {
      children: "如果用 API 来实现这个过程，其实就是一个链式调用的过程。"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "我们先调用 OpenAI，把翻译请求和原始问题组合在一起发送给 AI，完成问题的中译英。"
      }), "\n", jsx(_components.li, {
        children: "然后再把拿到的翻译好的英文问题发送给 OpenAI，得到英文答案。"
      }), "\n", jsx(_components.li, {
        children: "最后再把英文答案，和对应要求 AI 翻译答案的请求组合在一起，完成答案的英译中。"
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "language-python",
      children: [jsx(_components.span, {
        className: "lang",
        children: "python"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " openai"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " os"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " langchain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "prompts "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " PromptTemplate"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " langchain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "llms "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " OpenAI"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " langchain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "chains "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " LLMChain"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "openai"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "api_key "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " os"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "environ"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "get"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "OPENAI_API_KEY"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "llm "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "OpenAI"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "model_name"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "text-davinci-003"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "max_tokens"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2048"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "temperature"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0.5"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "en_to_zh_prompt "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "PromptTemplate"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "template"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "请把下面这句话翻译成英文： "
            }), jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "\\n\\n"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "{question}"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input_variables"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "question"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "question_prompt "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "PromptTemplate"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "template"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "{english_question}"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input_variables"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "english_question"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "zh_to_cn_prompt "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "PromptTemplate"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input_variables"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "english_answer"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "],"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "template"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "请把下面这一段翻译成中文： "
            }), jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "\\n\\n{english_answer}"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "question_translate_chain "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "LLMChain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "llm"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "llm"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "prompt"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "en_to_zh_prompt"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "output_key"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "english_question"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "english "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " question_translate_chain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "run"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "question"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "请你作为一个数据安全的专家，介绍一下casb的原理。"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "print"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "english"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "qa_chain "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "LLMChain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "llm"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "llm"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "prompt"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "question_prompt"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "output_key"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "english_answer"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "english_answer "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " qa_chain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "run"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "english_question"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "english"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "print"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "english_answer"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "answer_translate_chain "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "LLMChain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "llm"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "llm"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "prompt"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "zh_to_cn_prompt"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "answer "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " answer_translate_chain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "run"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "english_answer"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "english_answer"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "print"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "answer"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.div, {
      className: "language-python",
      children: [jsx(_components.span, {
        className: "lang",
        children: "python"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "Please explain the principle of CASB "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " an expert "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "in"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " data security"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "CASB"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "Cloud Access Security Broker"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "is"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " a security technology that helps organizations protect data stored "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "in"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " cloud applications "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " services"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " It provides visibility "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " control over cloud usage"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " allowing organizations to monitor"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " enforce"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " protect their data "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "in"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " the cloud"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " CASB works by creating a secure bridge between the cloud "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " the organization"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "s existing security policies and tools. It provides organizations with real-time insights into user activity and access to data, allowing them to detect and prevent unauthorized access and malicious activity. CASB also offers a range of security capabilities, such as data loss prevention, encryption, malware detection, and access control. By providing a comprehensive security solution for cloud environments, CASB helps organizations protect their data and maintain compliance with regulatory requirements."
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "CASB（云访问安全经纪人）是一种帮助组织保护存储在云应用程序和服务中的数据的安全技术。它提供了对云使用的可见性和控制，使组织能够监控，执行和保护云中的数据。CASB通过在云和组织现有安全策略和工具之间建立安全桥梁来工作。它为组织提供实时的用户活动和数据访问洞察，使其能够检测和防止未经授权的访问和恶意活动。CASB还提供了一系列安全功能，如数据丢失预防，加密，恶意软件检测和访问控制。通过为云环境提供全面的安全解决方案，CASB帮助组织保护其数据并符合监管要求。"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "这里的代码，我们使用了 Langchain 这个库，不过还没有动用它的链式调用过程。我们主要用了 Langchain 的三个包。"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "LLM，也就是我们使用哪个大语言模型，来回答我们提出的问题。在这里，我们还是使用 OpenAIChat，也就是最新放出来的 gpt - 3.5 - turbo 模型。"
      }), "\n", jsx(_components.li, {
        children: "PromptTemplate，它可以定义一个提示语模版，里面能够定义一些可以动态替换的变量。比如，代码里的 question_prompt 这个模版里，我们就定义了一个叫做 question 的变量，因为我们每次问的问题都会不一样。事实上，llamd - index 里面的 PromptTemplate 就是对 Langchain 的 PromptTemplate 做了一层简单的封装。"
      }), "\n", jsx(_components.li, {
        children: "主角 LLMChain，它的构造函数接收一个 LLM 和一个 PromptTemplate 作为参数。构造完成之后，可以直接调用里面的 run 方法，将 PromptTemplate 需要的变量，用 K => V 对的形式传入进去。返回的结果，就是 LLM 给我们的答案。"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "不过如果看上面这段代码，我们似乎只是对 OpenAI 的 API 做了一层封装而已。我们构建了 3 个 LLMChain，然后按照顺序调用，每次拿到答案之后，再作为输入，交给下一个 LLM 调用。感觉好像更麻烦了，没有减少什么工作量呀？"
    }), "\n", jsx(_components.p, {
      children: "别着急，这是因为我们还没有真正用上 LLMChain 的“链式调用”功能，而用这个功能，只需要加上一行小小的代码。我们用一个叫做 SimpleSequentialChain 的 LLMChain 类，把我们要按照顺序依次调用的三个 LLMChain 放在一个数组里，传给这个类的构造函数。"
    }), "\n", jsx(_components.p, {
      children: "然后对于这个对象，我们调用 run 方法，把我们用中文问的问题交给它。这个时候，这个 SimpleSequentialChain，就会按照顺序开始调用 chains 这个数组参数里面包含的其他 LLMChain。并且，每一次调用的结果，会存储在这个 Chain 构造时定义的 output_key 参数里。而下一个调用的 LLMChain，里面模版内的变量如果有和之前的 output_key 名字相同的，就会用 output_key 里存入的内容替换掉模版内变量所在的占位符。"
    }), "\n", jsx(_components.p, {
      children: "这次，我们只向这个 SimpleSequentialChain 调用一次 run 方法，把一开始的问题交给它就好了。后面根据答案去问新的问题，这个 LLMChain 会自动地链式搞定。我在这里把日志的 Verbose 模式打开了，你在输出的过程中，可以看到其实这个 LLMChain 是调用了三次，并且中间两次的返回结果你也可以一并看到。"
    }), "\n", jsxs(_components.div, {
      className: "language-python",
      children: [jsx(_components.span, {
        className: "lang",
        children: "python"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " langchain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "chains "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " SimpleSequentialChain"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "chinese_qa_chain "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "SimpleSequentialChain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "chains"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "question_translate_chain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " qa_chain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " answer_translate_chain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "],"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input_key"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "question"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "verbose"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=True"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "answer "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " chinese_qa_chain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "run"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "question"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "请你作为一个数据安全的专家，介绍一下DSGC的原理。"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "print"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "answer"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.div, {
      className: "language-python",
      children: [jsx(_components.span, {
        className: "lang",
        children: "python"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " Entering new SimpleSequentialChain chain..."
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "Please "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " a data security expert"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " introduce the principle of DSGC"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "The Data Security Governance "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Council"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "DSGC"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "is"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " a "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "set"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " of principles "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " best practices "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "for"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " organizations to consider when developing"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " implementing"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " managing a comprehensive data security program"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " The DSGC focuses on the protection of personal data"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " the prevention of data breaches"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " the enforcement of data security laws "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " regulations"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " The DSGC provides guidance on the use of technologies"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " processes"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " policies to protect personal data "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " prevent data breaches"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " It also provides guidance on the management of data security risks"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " including the identification "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " assessment of risks"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " the development of risk management strategies"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " the implementation of security controls"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " The DSGC also focuses on the enforcement of data security laws "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " regulations"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " including the development of policies "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " procedures to ensure compliance "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "with"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " applicable laws "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "and"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " regulations"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "数据安全治理委员会（DSGC）是一套原则和最佳实践，用于组织在制定、实施和管理全面的数据安全计划时考虑的内容。DSGC专注于保护个人数据、预防数据泄露和执行数据安全法律法规。DSGC提供有关使用技术、流程和政策来保护个人数据和防止数据泄露的指导。它还提供有关管理数据安全风险的指导，包括识别和评估风险、制定风险管理策略以及实施安全控制。DSGC还专注于执行数据安全法律法规，包括制定政策和程序以确保遵守适用的法律法规。"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " Finished chain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "数据安全治理委员会（DSGC）是一套原则和最佳实践，用于组织在制定、实施和管理全面的数据安全计划时考虑的内容。DSGC专注于保护个人数据、预防数据泄露和执行数据安全法律法规。DSGC提供有关使用技术、流程和政策来保护个人数据和防止数据泄露的指导。它还提供有关管理数据安全风险的指导，包括识别和评估风险、制定风险管理策略以及实施安全控制。DSGC还专注于执行数据安全法律法规，包括制定政策和程序以确保遵守适用的法律法规。"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "事实上，因为使用变量的输入输出，是用这些参数定义的。所以我们不是只能用前一个 LLMChain 的输出作为后一个 LLMChain 的输入。我们完全可以连续问多个问题，然后把这些问题的答案，作为后续问题的输入来继续处理。下面我就给你看一个例子。"
    }), "\n", jsxs(_components.div, {
      className: "language-python",
      children: [jsx(_components.span, {
        className: "lang",
        children: "python"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " langchain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "chains "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " SequentialChain"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "q1_prompt "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "PromptTemplate"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input_variables"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "year1"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "],"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "template"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "{year1}"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "年的欧冠联赛的冠军是哪支球队，只说球队名称。"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "q2_prompt "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "PromptTemplate"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input_variables"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "year2"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "],"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "template"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "{year2}"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "年的欧冠联赛的冠军是哪支球队，只说球队名称。"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "q3_prompt "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "PromptTemplate"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input_variables"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "team1"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "team2"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "],"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "template"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "{team1}"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "和"
            }), jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "{team2}"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "哪只球队获得欧冠的次数多一些？"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "chain1 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "LLMChain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "llm"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "llm"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "prompt"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "q1_prompt"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "output_key"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "team1"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "chain2 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "LLMChain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "llm"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "llm"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "prompt"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "q2_prompt"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "output_key"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "team2"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "chain3 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "LLMChain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "llm"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "llm"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "prompt"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "q3_prompt"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "sequential_chain "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "SequentialChain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "chains"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "chain1"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " chain2"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " chain3"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "],"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input_variables"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "year1"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "year2"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "],"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "verbose"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=True"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "answer "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " sequential_chain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "run"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "year1"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2000"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "year2"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2010"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "print"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "answer"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.div, {
      className: "language-python",
      children: [jsx(_components.span, {
        className: "lang",
        children: "python"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " Entering new SequentialChain chain..."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " Finished chain"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "西班牙皇家马德里队获得欧冠的次数更多，共13次，而拜仁慕尼黑只有5次。"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "在这个例子里，我们定义了两个 PromptTemplate 和对应的 LLMChain，各自接收一个年份作为输入，回答这两个年份的欧冠冠军。然后将两个队名作为输入，放到第三个问题里，让 AI 告诉我们这两支球队哪一支获得欧冠的次数多一些。只需要在我们的 SequentialChain 里输入两个年份，就能通过三次回答得到答案。"
    }), "\n", jsx(_components.hr, {})]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent$1, props)
  })) : _createMdxContent$1(props);
}
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  frontmatter: frontmatter$1,
  toc: toc$1
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "pageType": "home",
  "hero": {
    "name": "Jaguar",
    "text": "基于 Vite & MDX 语法的静态站点生成器",
    "tagline": "简单、强大、高性能的现代化 SSG 方案",
    "image": {
      "src": "/jaguarliu.png",
      "alt": "Jaguar"
    },
    "actions": [{
      "theme": "brand",
      "text": "快速开始",
      "link": "/zh/guide/getting-started"
    }, {
      "theme": "alt",
      "text": "GitHub 地址",
      "link": "https://github.com/Eumenides1/jaguar.js"
    }]
  },
  "features": [{
    "title": "Vite: 极速的开发响应速度",
    "details": "基于 Vite 构建，开发时的响应速度极快，即时的热更新，带给你极致的开发体验。",
    "icon": "🚀"
  }, {
    "title": "MDX: Markdown & React 组件来写内容",
    "details": "MDX 是一种强大的方式来写内容。你可以在 Markdown 中使用 React 组件。",
    "icon": "📦"
  }, {
    "title": "孤岛架构: 更高的生产性能",
    "details": "采用 Islands 架构，意味着更少的 JavaScript 代码、局部 hydration， 从而带来更好的首屏性能。",
    "icon": "✨"
  }, {
    "title": "功能丰富: 一站式解决方案",
    "details": "对全文搜索、国际化等常见功能可以做到开箱即用。",
    "icon": "🛠️"
  }, {
    "title": "TypeScript: 优秀的类型支持",
    "details": "使用 TypeScript 编写，提供了优秀的类型支持，让你的开发更加顺畅。",
    "icon": "🔑"
  }, {
    "title": "扩展性强: 提供多种自定义能力",
    "details": "通过其扩展机制，你可以轻松的扩展 Island 的主题 UI 和构建能力。",
    "icon": "🎨"
  }]
};
const toc = [];
function _createMdxContent(props) {
  return jsx(Fragment, {});
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent, props)
  })) : _createMdxContent();
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter,
  toc
}, Symbol.toStringTag, { value: "Module" }));
const routes = [
  { path: "/Counter", element: React.createElement(Counter), preload: () => Promise.resolve().then(() => Counter$1) },
  { path: "/b", element: React.createElement(B$1), preload: () => Promise.resolve().then(() => b$1) },
  { path: "/guide/a", element: React.createElement(A), preload: () => Promise.resolve().then(() => a) },
  { path: "/guide/b", element: React.createElement(B), preload: () => Promise.resolve().then(() => b) },
  { path: "/guide/c", element: React.createElement(C), preload: () => Promise.resolve().then(() => c) },
  { path: "/guide/", element: React.createElement(MDXContent$1), preload: () => Promise.resolve().then(() => index$1) },
  { path: "/", element: React.createElement(MDXContent), preload: () => Promise.resolve().then(() => index) }
];
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes2, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(
      branches[i],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      safelyDecodeURI(pathname)
    );
  }
  return matches;
}
function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index2, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index2,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes2.forEach((route, index2) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index2);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index2, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0)
    return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index2) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index2) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n, i) => n === b2[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a2[a2.length - 1] - b2[b2.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index2) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index2] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index2] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
const DataRouterContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}
const NavigationContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}
const LocationContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}
const RouteContext = /* @__PURE__ */ React__namespace.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}
const RouteErrorContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}
function useInRouterContext() {
  return React__namespace.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  return React__namespace.useContext(LocationContext).location;
}
function useRoutes(routes2, locationArg) {
  return useRoutesImpl(routes2, locationArg);
}
function useRoutesImpl(routes2, locationArg, dataRouterState) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  let {
    navigator
  } = React__namespace.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = React__namespace.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (process.env.NODE_ENV !== "production") {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? process.env.NODE_ENV !== "production" ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes2, {
    pathname: remainingPathname
  });
  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? warning(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ') : void 0;
    process.env.NODE_ENV !== "production" ? warning(matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.') : void 0;
  }
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
    ]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
    ])
  })), parentMatches, dataRouterState);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ jsx(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      },
      children: renderedMatches
    });
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  if (process.env.NODE_ENV !== "production") {
    console.error("Error handled by React Router default ErrorBoundary:", error);
    devInfo = /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx("p", {
        children: "💿 Hey developer 👋"
      }), /* @__PURE__ */ jsxs("p", {
        children: ["You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ jsx("code", {
          style: codeStyles,
          children: "ErrorBoundary"
        }), " or", " ", /* @__PURE__ */ jsx("code", {
          style: codeStyles,
          children: "errorElement"
        }), " prop on your route."]
      })]
    });
  }
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("h2", {
      children: "Unexpected Application Error!"
    }), /* @__PURE__ */ jsx("h3", {
      style: {
        fontStyle: "italic"
      },
      children: message
    }), stack ? /* @__PURE__ */ jsx("pre", {
      style: preStyles,
      children: stack
    }) : null, devInfo]
  });
}
const defaultErrorElement = /* @__PURE__ */ jsx(DefaultErrorComponent, {});
class RenderErrorBoundary extends React__namespace.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error || state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ jsx(RouteContext.Provider, {
      value: this.props.routeContext,
      children: /* @__PURE__ */ jsx(RouteErrorContext.Provider, {
        value: this.state.error,
        children: this.props.component
      })
    }) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = React__namespace.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ jsx(RouteContext.Provider, {
    value: routeContext,
    children
  });
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  var _dataRouterState2;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (matches == null) {
    var _dataRouterState;
    if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m) => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(",")) : invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index2) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    let errorElement = null;
    if (dataRouterState) {
      errorElement = match.route.errorElement || defaultErrorElement;
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index2 + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ React__namespace.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ jsx(RenderedRoute, {
        match,
        routeContext: {
          outlet,
          matches: matches2,
          isDataRoute: dataRouterState != null
        },
        children
      });
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index2 === 0) ? /* @__PURE__ */ jsx(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches2,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseBlocker"] = "useBlocker";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
  DataRouterHook2["UseNavigateStable"] = "useNavigate";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseBlocker"] = "useBlocker";
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook2["UseRouteId"] = "useRouteId";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterState(hookName) {
  let state = React__namespace.useContext(DataRouterStateContext);
  !state ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = React__namespace.useContext(RouteContext);
  !route ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? process.env.NODE_ENV !== "production" ? invariant(false, hookName + ' can only be used on routes that contain a unique "id"') : invariant(false) : void 0;
  return thisRoute.route.id;
}
function useRouteError() {
  var _state$errors;
  let error = React__namespace.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
  if (error) {
    return error;
  }
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    process.env.NODE_ENV !== "production" ? warning(false, message) : void 0;
  }
}
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref5;
  !!useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = React__namespace.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = React__namespace.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  process.env.NODE_ENV !== "production" ? warning(locationContext != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ jsx(NavigationContext.Provider, {
    value: navigationContext,
    children: /* @__PURE__ */ jsx(LocationContext.Provider, {
      children,
      value: locationContext
    })
  });
}
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
  AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
  AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
new Promise(() => {
});
const Content = () => {
  console.log(routes);
  const routeElement = useRoutes(routes);
  return routeElement;
};
const DataContext = React.createContext({});
const usePageData = () => {
  return React.useContext(DataContext);
};
const nav = "_nav_xv98q_1";
const link$1 = "_link_xv98q_7";
const socialLinkIcon = "_social-link-icon_xv98q_18";
const styles$7 = {
  nav,
  link: link$1,
  socialLinkIcon
};
const check = "_check_1jqu0_17";
const icon = "_icon_1jqu0_34";
const dark = "_dark_1jqu0_29";
const sun = "_sun_1jqu0_57";
const moon = "_moon_1jqu0_61";
const styles$6 = {
  "switch": "_switch_1jqu0_1",
  check,
  icon,
  dark,
  sun,
  moon
};
const APPEARANCE_KEY = "appearance";
const setClassList = (isDark = false) => {
  const classList = document.documentElement.classList;
  if (isDark) {
    classList.add("dark");
  } else {
    classList.remove("dark");
  }
};
const updateAppearance = () => {
  const userPreference = localStorage.getItem(APPEARANCE_KEY);
  setClassList(userPreference === "dark");
};
if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
  updateAppearance();
  window.addEventListener("storage", updateAppearance);
}
function toggle() {
  const classList = document.documentElement.classList;
  if (classList.contains("dark")) {
    setClassList(false);
    localStorage.setItem(APPEARANCE_KEY, "light");
  } else {
    setClassList(true);
    localStorage.setItem(APPEARANCE_KEY, "dark");
  }
}
function Switch(props) {
  return /* @__PURE__ */ jsx("button", {
    className: `${styles$6.switch} ${props.className}`,
    id: props.id ?? "",
    type: "button",
    role: "switch",
    ...props.onClick ? {
      onClick: props.onClick
    } : {},
    children: /* @__PURE__ */ jsx("span", {
      className: styles$6.check,
      children: /* @__PURE__ */ jsx("span", {
        className: styles$6.icon,
        children: props.children
      })
    })
  });
}
function SwitchAppearance() {
  return /* @__PURE__ */ jsxs(Switch, {
    onClick: toggle,
    children: [/* @__PURE__ */ jsx("div", {
      className: styles$6.sun,
      children: /* @__PURE__ */ jsx("div", {
        className: "i-carbon-sun",
        w: "full",
        h: "full"
      })
    }), /* @__PURE__ */ jsx("div", {
      className: styles$6.moon,
      children: /* @__PURE__ */ jsx("div", {
        className: "i-carbon-moon",
        w: "full",
        h: "full"
      })
    })]
  });
}
function MenuItem(item) {
  return /* @__PURE__ */ jsx("div", {
    className: "text-sm font-medium mx-3",
    children: /* @__PURE__ */ jsx("a", {
      href: item.link,
      className: styles$7.link,
      children: item.text
    })
  });
}
function Nav() {
  const {
    siteData: siteData2
  } = usePageData();
  const nav2 = siteData2.themeConfig.nav || [];
  return /* @__PURE__ */ jsx("header", {
    fixed: "~",
    pos: "t-0 l-0",
    w: "full",
    z: "10",
    children: /* @__PURE__ */ jsxs("div", {
      flex: "~",
      items: "center",
      justify: "between",
      className: `h-14 divider-bottom ${styles$7.nav}`,
      children: [/* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("a", {
          href: "/",
          hover: "opacity-60",
          className: "w-full h-full text-1rem font-semibold flex items-center",
          children: "Jaguar.js"
        })
      }), /* @__PURE__ */ jsxs("div", {
        flex: "~",
        children: [/* @__PURE__ */ jsx("div", {
          flex: "~",
          children: nav2.map((item) => /* @__PURE__ */ React.createElement(MenuItem, {
            ...item,
            key: item.text
          }))
        }), /* @__PURE__ */ jsx("div", {
          before: "menu-item-before",
          flex: "~",
          children: /* @__PURE__ */ jsx(SwitchAppearance, {})
        }), /* @__PURE__ */ jsx("div", {
          className: styles$7.socialLinkIcon,
          ml: "2",
          children: /* @__PURE__ */ jsx("a", {
            href: "/",
            children: /* @__PURE__ */ jsx("div", {
              className: "i-carbon-logo-github w-5 h-5 fill-current"
            })
          })
        })]
      })]
    })
  });
}
const base = "";
const vars = "";
const doc = "";
const __uno = "";
const clip = "_clip_10mxm_1";
const styles$5 = {
  clip
};
const link = "_link_oyvvy_1";
const styles$4 = {
  link
};
const EXTERNAL_URL_RE = /^https?/;
function Link(props) {
  const {
    href = "/",
    children,
    className = ""
  } = props;
  const isExternal = EXTERNAL_URL_RE.test(href);
  const target = isExternal ? "_blank" : "";
  const rel = isExternal ? "noopener noreferrer" : void 0;
  return /* @__PURE__ */ jsx("a", {
    href,
    target,
    rel,
    className: `${styles$4.link} ${className}`,
    children
  });
}
const button = "_button_1rrty_1";
const medium = "_medium_1rrty_14";
const big = "_big_1rrty_21";
const brand = "_brand_1rrty_28";
const alt = "_alt_1rrty_47";
const styles$3 = {
  button,
  medium,
  big,
  brand,
  alt
};
function Button(props) {
  const {
    theme = "brand",
    size = "big",
    href = "/",
    external = false,
    className = ""
  } = props;
  let type = null;
  if (props.type === "button") {
    type = "button";
  } else if (props.type === "a") {
    type = external ? "a" : Link;
  }
  return React.createElement(type ?? "a", {
    className: `${styles$3.button} ${styles$3[theme]} ${styles$3[size]} ${className}`,
    href
  }, props.text);
}
function HomeHero(props) {
  const {
    hero
  } = props;
  return /* @__PURE__ */ jsx("div", {
    m: "auto",
    p: "t-20 x-16 b-16",
    children: /* @__PURE__ */ jsxs("div", {
      flex: "~",
      className: "max-w-1152px",
      m: "auto",
      children: [/* @__PURE__ */ jsxs("div", {
        text: "left",
        flex: "~ col",
        className: "max-w-592px",
        children: [/* @__PURE__ */ jsx("h1", {
          font: "bold",
          text: "6xl",
          className: "max-w-576px",
          children: /* @__PURE__ */ jsx("span", {
            className: styles$5.clip,
            children: hero.name
          })
        }), /* @__PURE__ */ jsx("p", {
          text: "6xl",
          font: "bold",
          className: "max-w-576px",
          children: hero.text
        }), /* @__PURE__ */ jsx("p", {
          p: "t-3",
          text: "2xl text-2",
          font: "medium",
          className: "whitespace-pre-wrap max-w-576px",
          children: hero.tagline
        }), /* @__PURE__ */ jsx("div", {
          flex: "~ wrap",
          justify: "start",
          p: "t-8",
          children: hero.actions.map((action) => /* @__PURE__ */ jsx("div", {
            p: "1",
            children: /* @__PURE__ */ jsx(Button, {
              type: "a",
              text: action.text,
              href: action.link,
              theme: action.theme
            })
          }, action.link))
        })]
      }), hero.image && /* @__PURE__ */ jsx("div", {
        w: "max-96",
        h: "max-96",
        flex: "center",
        m: "auto",
        children: /* @__PURE__ */ jsx("img", {
          src: hero.image.src,
          alt: hero.image.alt
        })
      })]
    })
  });
}
function HomeFeature(props) {
  return /* @__PURE__ */ jsx("div", {
    className: "max-w-1152px",
    m: "auto",
    flex: "~ wrap",
    justify: "between",
    children: props.features.map((feature) => {
      const {
        icon: icon2,
        title: title2,
        details
      } = feature;
      return /* @__PURE__ */ jsx("div", {
        border: "rounded-md",
        p: "r-4 b-4",
        w: "1/3",
        children: /* @__PURE__ */ jsxs("article", {
          bg: "bg-soft",
          border: "~ bg-soft solid rounded-xl",
          p: "6",
          h: "full",
          children: [/* @__PURE__ */ jsx("div", {
            bg: "gray-light-4 dark:bg-white",
            border: "rounded-md",
            className: "mb-5 w-12 h-12 text-3xl flex-center",
            children: icon2
          }), /* @__PURE__ */ jsx("h2", {
            font: "bold",
            children: title2
          }), /* @__PURE__ */ jsx("p", {
            text: "sm text-2",
            font: "medium",
            className: "pt-2 leading-6",
            children: details
          })]
        })
      }, title2);
    })
  });
}
function HomeLayout() {
  const {
    frontmatter: frontmatter2
  } = usePageData();
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(HomeHero, {
      hero: frontmatter2.hero
    }), /* @__PURE__ */ jsx(HomeFeature, {
      features: frontmatter2.features
    })]
  });
}
const sidebar = "_sidebar_1ryyl_1";
const styles$2 = {
  sidebar
};
function Sidebar(props) {
  const {
    sidebarData,
    pathname
  } = props;
  const renderGroupItem = (item) => {
    const active = item.link === pathname;
    return /* @__PURE__ */ jsx("div", {
      ml: "5",
      children: /* @__PURE__ */ jsx("div", {
        p: "1",
        block: "~",
        text: "sm",
        "font-medium": "~",
        className: `${active ? "text-brand" : "text-text-2"}`,
        children: /* @__PURE__ */ jsx(Link, {
          href: item.link,
          children: item.text
        })
      })
    });
  };
  const renderGroup = (item) => {
    var _a;
    return /* @__PURE__ */ jsxs("section", {
      block: "~",
      "not-first": "divider-top mt-4",
      children: [/* @__PURE__ */ jsx("div", {
        flex: "~",
        justify: "between",
        items: "center",
        children: /* @__PURE__ */ jsx("h2", {
          m: "t-3 b-2",
          text: "1rem text-1",
          font: "bold",
          children: item.text
        })
      }), /* @__PURE__ */ jsx("div", {
        mb: "1",
        children: (_a = item.items) == null ? void 0 : _a.map((item2) => /* @__PURE__ */ jsx("div", {
          children: renderGroupItem(item2)
        }, item2.link))
      })]
    }, item.text);
  };
  return /* @__PURE__ */ jsx("aside", {
    className: styles$2.sidebar,
    children: /* @__PURE__ */ jsx("nav", {
      children: sidebarData.map(renderGroup)
    })
  });
}
const content = "_content_1wi6v_1";
const docContent = "_doc-content_1wi6v_8";
const asideContainer = "_aside-container_1wi6v_14";
const styles$1 = {
  content,
  docContent,
  asideContainer
};
const prev = "_prev_6rn4s_1";
const next = "_next_6rn4s_2";
const pagerLink = "_pager-link_6rn4s_6";
const title = "_title_6rn4s_20";
const desc = "_desc_6rn4s_29";
const styles = {
  prev,
  next,
  pagerLink,
  title,
  desc
};
function usePrevNextPage() {
  var _a;
  const { pathname } = useLocation();
  const { siteData: siteData2 } = usePageData();
  const sidebar2 = ((_a = siteData2.themeConfig) == null ? void 0 : _a.sidebar) || {};
  const flattenTitles = [];
  Object.keys(sidebar2).forEach((key) => {
    const groups = sidebar2[key] || [];
    groups.forEach((group) => {
      group.items.forEach((item) => {
        flattenTitles.push(item);
      });
    });
  });
  const pageIndex = flattenTitles.findIndex((item) => item.link === pathname);
  const prevPage = flattenTitles[pageIndex - 1] || null;
  const nextPage = flattenTitles[pageIndex + 1] || null;
  return {
    prevPage,
    nextPage
  };
}
function DocFooter() {
  const {
    prevPage,
    nextPage
  } = usePrevNextPage();
  return /* @__PURE__ */ jsx("footer", {
    mt: "8",
    children: /* @__PURE__ */ jsxs("div", {
      flex: "~",
      gap: "2",
      "divider-top": "~",
      pt: "6",
      children: [/* @__PURE__ */ jsx("div", {
        flex: "~ col",
        className: styles.prev,
        children: prevPage && /* @__PURE__ */ jsxs("a", {
          href: prevPage.link,
          className: styles.pagerLink,
          children: [/* @__PURE__ */ jsx("span", {
            className: styles.desc,
            children: "上一页"
          }), /* @__PURE__ */ jsx("span", {
            className: styles.title,
            children: prevPage.text
          })]
        })
      }), /* @__PURE__ */ jsx("div", {
        flex: "~ col",
        className: styles.next,
        children: nextPage && /* @__PURE__ */ jsxs("a", {
          href: nextPage.link,
          className: `${styles.pagerLink} ${styles.next}`,
          children: [/* @__PURE__ */ jsx("span", {
            className: styles.desc,
            children: "下一页"
          }), /* @__PURE__ */ jsx("span", {
            className: styles.title,
            children: nextPage.text
          })]
        })
      })]
    })
  });
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var now = function() {
  return root$1.Date.now();
};
const now$1 = now;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
let links = [];
const NAV_HEIGHT = 56;
function scrollToTarget(target, isSmooth) {
  const targetPadding = parseInt(
    window.getComputedStyle(target).paddingTop,
    10
  );
  const targetTop = window.scrollY + target.getBoundingClientRect().top + targetPadding - NAV_HEIGHT;
  window.scrollTo({
    left: 0,
    top: targetTop,
    behavior: isSmooth ? "smooth" : "auto"
  });
}
function bindingAsideScroll() {
  const marker = document.getElementById("aside-marker");
  const aside = document.getElementById("aside-container");
  const headers = Array.from((aside == null ? void 0 : aside.getElementsByTagName("a")) || []).map(
    (item) => decodeURIComponent(item.hash)
  );
  if (!aside) {
    return;
  }
  const activate = (links2, index2) => {
    if (links2[index2]) {
      const id = links2[index2].getAttribute("href");
      const tocIndex = headers.findIndex((item) => item === id);
      const currentLink = aside == null ? void 0 : aside.querySelector(`a[href="#${id.slice(1)}"]`);
      if (currentLink) {
        marker.style.top = `${33 + tocIndex * 28}px`;
        marker.style.opacity = "1";
      }
    }
  };
  const setActiveLink = () => {
    links = Array.from(
      document.querySelectorAll(".jaguar-doc .header-anchor")
    ).filter((item) => {
      var _a;
      return ((_a = item.parentElement) == null ? void 0 : _a.tagName) !== "H1";
    });
    const isBottom = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight;
    if (isBottom) {
      activate(links, links.length - 1);
      return;
    }
    for (let i = 0; i < links.length; i++) {
      const currentAnchor = links[i];
      const nextAnchor = links[i + 1];
      const scrollTop = Math.ceil(window.scrollY);
      const currentAnchorTop = currentAnchor.parentElement.offsetTop - NAV_HEIGHT;
      if (!nextAnchor) {
        activate(links, i);
        break;
      }
      if (i === 0 && scrollTop < currentAnchorTop || scrollTop == 0) {
        activate(links, 0);
        break;
      }
      const nextAnchorTop = nextAnchor.parentElement.offsetTop - NAV_HEIGHT;
      if (scrollTop >= currentAnchorTop && scrollTop < nextAnchorTop) {
        activate(links, i);
        break;
      }
    }
  };
  const throttledSetActiveLink = throttle(setActiveLink, 100);
  window.addEventListener("scroll", throttledSetActiveLink);
  return () => {
    window.removeEventListener("scroll", throttledSetActiveLink);
  };
}
function useHeaders(initHeaders) {
  const [headers, setHeaders] = React.useState(initHeaders);
  React.useEffect(() => {
  });
  return headers;
}
function Aside(props) {
  const {
    headers: rawHeaders = []
  } = props;
  const headers = useHeaders(rawHeaders);
  const hasOutline = headers.length > 0;
  const markerRef = React.useRef(null);
  React.useEffect(() => {
    const unbinding = bindingAsideScroll();
    return () => {
      unbinding();
    };
  }, []);
  const renderHeader = (header) => {
    return /* @__PURE__ */ jsx("li", {
      children: /* @__PURE__ */ jsx("a", {
        href: `#${header.id}`,
        className: "block leading-7 text-text-2 hover:text-text-1",
        transition: "color duration-300",
        style: {
          paddingLeft: (header.depth - 2) * 12
        },
        onClick: (e) => {
          e.preventDefault();
          const target = document.getElementById(header.id);
          target && scrollToTarget(target, false);
        },
        children: header.text
      })
    }, header.id);
  };
  return /* @__PURE__ */ jsx("div", {
    flex: "~ col 1",
    style: {
      width: "var(--jaguar-aside-width)"
    },
    children: /* @__PURE__ */ jsx("div", {
      children: hasOutline && /* @__PURE__ */ jsxs("div", {
        id: "aside-container",
        className: "relative divider-left pl-4 text-13px font-medium",
        children: [/* @__PURE__ */ jsx("div", {
          ref: markerRef,
          id: "aside-marker",
          className: "absolute top-33px opacity-0 w-1px h-18px bg-brand",
          style: {
            left: "-1px",
            transition: "top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s, opacity 0.25s"
          }
        }), /* @__PURE__ */ jsx("div", {
          "leading-7": "~",
          text: "13px",
          font: "semibold",
          children: "ON THIS PAGE"
        }), /* @__PURE__ */ jsx("nav", {
          children: /* @__PURE__ */ jsx("ul", {
            relative: "~",
            children: headers.map(renderHeader)
          })
        })]
      })
    })
  });
}
function DocLayout() {
  var _a;
  const {
    siteData: siteData2,
    toc: toc2
  } = usePageData();
  const sidebarData = ((_a = siteData2.themeConfig) == null ? void 0 : _a.sidebar) || {};
  const {
    pathname
  } = useLocation();
  const matchedSidebarKey = Object.keys(sidebarData).find((key) => {
    if (pathname.startsWith(key)) {
      return true;
    }
  });
  const matchedSidebar = sidebarData[matchedSidebarKey] || [];
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Sidebar, {
      sidebarData: matchedSidebar,
      pathname
    }), /* @__PURE__ */ jsxs("div", {
      className: styles$1.content,
      flex: "~",
      children: [/* @__PURE__ */ jsxs("div", {
        className: styles$1.docContent,
        children: [/* @__PURE__ */ jsx("div", {
          className: "jaguar-doc",
          children: /* @__PURE__ */ jsx(Content, {})
        }), /* @__PURE__ */ jsx(DocFooter, {})]
      }), /* @__PURE__ */ jsx("div", {
        className: styles$1.asideContainer,
        children: /* @__PURE__ */ jsx(Aside, {
          headers: toc2
        })
      })]
    })]
  });
}
function Layout() {
  const pageData = usePageData();
  const {
    pageType
  } = pageData;
  const getContent = () => {
    if (pageType === "home") {
      return /* @__PURE__ */ jsx(HomeLayout, {});
    } else if (pageType === "doc") {
      return /* @__PURE__ */ jsx(DocLayout, {});
    } else {
      return /* @__PURE__ */ jsx("div", {
        children: "404 页面"
      });
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsx("section", {
      style: {
        paddingTop: "var(--jaguar-nav-height)"
      },
      children: getContent()
    })]
  });
}
const siteData = { "title": "xxx", "description": "SSG Framework", "themeConfig": { "nav": [{ "text": "主页", "link": "/" }, { "text": "指南", "link": "/guide/" }], "sidebar": { "/guide/": [{ "text": "教程", "items": [{ "text": "快速上手", "link": "/guide/a" }, { "text": "如何安装", "link": "/guide/b" }, { "text": "注意事项", "link": "/guide/c" }] }] } }, "vite": {} };
async function initPageData(routePath) {
  var _a;
  const matched = matchRoutes(routes, routePath);
  if (matched) {
    const moduleInfo = await matched[0].route.preload();
    console.log(moduleInfo);
    return {
      pageType: ((_a = moduleInfo.frontmatter) == null ? void 0 : _a.pageType) ?? "doc",
      siteData,
      frontmatter: moduleInfo.frontmatter,
      pagePath: routePath,
      toc: moduleInfo.toc
    };
  }
  return {
    pageType: "404",
    siteData,
    pagePath: routePath,
    frontmatter: {}
  };
}
function App() {
  return /* @__PURE__ */ jsx(Layout, {});
}
function StaticRouter({
  basename,
  children,
  location: locationProp = "/"
}) {
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let action = Action.Pop;
  let location = {
    pathname: locationProp.pathname || "/",
    search: locationProp.search || "",
    hash: locationProp.hash || "",
    state: locationProp.state || null,
    key: locationProp.key || "default"
  };
  let staticNavigator = getStatelessNavigator();
  return /* @__PURE__ */ jsx(Router, {
    basename,
    children,
    location,
    navigationType: action,
    navigator: staticNavigator,
    static: true
  });
}
function getStatelessNavigator() {
  return {
    createHref,
    encodeLocation,
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
    },
    forward() {
      throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
    }
  };
}
function createHref(to) {
  return typeof to === "string" ? to : createPath(to);
}
function encodeLocation(to) {
  let path = typeof to === "string" ? parsePath(to) : to;
  return {
    pathname: path.pathname || "",
    search: path.search || "",
    hash: path.hash || ""
  };
}
async function render(pagePath) {
  const pageData = await initPageData(pagePath);
  return server.renderToString(/* @__PURE__ */ jsx(DataContext.Provider, {
    value: pageData,
    children: /* @__PURE__ */ jsx(StaticRouter, {
      location: pagePath,
      children: /* @__PURE__ */ jsx(App, {})
    })
  }));
}
exports.render = render;
exports.routes = routes;
