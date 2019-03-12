(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{202:function(s,e,t){"use strict";t.r(e);var r=t(0),a=Object(r.a)({},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),t("p",[s._v("使用Compose基本上是一个三步过程。")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),s._m(5),s._v(" "),s._m(6),s._v(" "),t("p",[s._v("其代码目前在 "),t("a",{attrs:{href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/docker/compose"),t("OutboundLink")],1),s._v(" 上开源。")]),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10),s._v(" "),s._m(11),s._v(" "),s._m(12),s._v(" "),s._m(13),s._v(" "),s._m(14),s._v(" "),s._m(15),s._v(" "),s._m(16),s._v(" "),t("p",[s._v("前两种方式是传统方式，适合本地环境下安装使用；最后一种方式则不破坏系统环境，更适合云计算场景。")]),s._v(" "),s._m(17),s._v(" "),s._m(18),t("p",[s._v("Linux 系统请使用以下介绍的方法安装。")]),s._v(" "),s._m(19),s._v(" "),t("p",[s._v("在 Linux 上的也安装十分简单，从 "),t("a",{attrs:{href:"https://github.com/docker/compose/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方 GitHub Release"),t("OutboundLink")],1),s._v(" 处直接下载编译好的二进制文件即可。")]),s._v(" "),t("p",[s._v("例如，在 Linux 64 位系统上直接下载对应的二进制包。")]),s._v(" "),s._m(20),t("p",[s._v("可以看到类似如下输出，说明安装成功。")]),s._v(" "),s._m(21),s._m(22),s._v(" "),s._m(23),s._m(24),s._v(" "),t("p",[s._v("Compose 既然是一个 Python 应用，自然也可以直接用容器来执行它。")]),s._v(" "),s._m(25),s._m(26),s._v(" "),t("p",[s._v("如果是二进制包方式安装的，删除二进制文件即可。")]),s._v(" "),s._m(27),s._m(28),s._v(" "),s._m(29)])},[function(){var s=this.$createElement,e=this._self._c||s;return e("h3",{attrs:{id:"什么是-docker-compose？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-docker-compose？","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是 Docker Compose？")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[e("code",[this._v("Docker Compose")]),this._v(" 是 Docker 官方编排（Orchestration）项目之一，负责快速的部署分布式应用。")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ol",[t("li",[s._v("定义您的应用程序环境，"),t("code",[s._v("Dockerfile")]),s._v("以便可以在任何地方进行复制。")]),s._v(" "),t("li",[s._v("定义构成应用程序的服务，"),t("code",[s._v("docker-compose.yml")]),s._v("以便它们可以在隔离的环境中一起运行。")]),s._v(" "),t("li",[s._v("最后，运行"),t("code",[s._v("docker-compose up")]),s._v("和Compose将启动并运行整个应用程序。")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("A "),e("code",[this._v("docker-compose.yml")]),this._v("看起来像这样：")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("version: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\n\nservices:\n  web:\n    build: "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n    ports:\n     - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5000:5000"')]),s._v("\n    volumes:\n     - .:/code\n  redis:\n    image: redis\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h3",{attrs:{id:"docker-compose简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose简介","aria-hidden":"true"}},[this._v("#")]),this._v(" docker-compose简介")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[e("code",[this._v("Compose")]),this._v(" 项目是 Docker 官方的开源项目，负责实现对 Docker 容器集群的快速编排。从功能上看，跟 "),e("code",[this._v("OpenStack")]),this._v(" 中的 "),e("code",[this._v("Heat")]),this._v(" 十分类似。")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[e("code",[this._v("Compose")]),this._v(" 定位是 「定义和运行多个 Docker 容器的应用（Defining and running multi-container Docker applications）」，其前身是开源项目 Fig。")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("通过第一部分中的介绍，我们知道使用一个 "),e("code",[this._v("Dockerfile")]),this._v(" 模板文件，可以让用户很方便的定义一个单独的应用容器。然而，在日常工作中，经常会碰到需要多个容器相互配合来完成某项任务的情况。例如要实现一个 Web 项目，除了 Web 服务容器本身，往往还需要再加上后端的数据库服务容器，甚至还包括负载均衡容器等。")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[e("code",[this._v("Compose")]),this._v(" 恰好满足了这样的需求。它允许用户通过一个单独的 "),e("code",[this._v("docker-compose.yml")]),this._v(" 模板文件（YAML 格式）来定义一组相关联的应用容器为一个项目（project）。")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[e("code",[this._v("Compose")]),this._v(" 中有两个重要的概念：")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ul",[t("li",[s._v("服务 ("),t("code",[s._v("service")]),s._v(")：一个应用的容器，实际上可以包括若干运行相同镜像的容器实例。")]),s._v(" "),t("li",[s._v("项目 ("),t("code",[s._v("project")]),s._v(")：由一组关联的应用容器组成的一个完整业务单元，在 "),t("code",[s._v("docker-compose.yml")]),s._v(" 文件中定义。")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[e("code",[this._v("Compose")]),this._v(" 的默认管理对象是项目，通过子命令对项目中的一组容器进行便捷地生命周期管理。")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[e("code",[this._v("Compose")]),this._v(" 项目由 Python 编写，实现上调用了 Docker 服务提供的 API 来对容器进行管理。因此，只要所操作的平台支持 Docker API，就可以在其上利用 "),e("code",[this._v("Compose")]),this._v(" 来进行编排管理。")])},function(){var s=this.$createElement,e=this._self._c||s;return e("h3",{attrs:{id:"docker-compose-安装与卸载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-安装与卸载","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker Compose 安装与卸载")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[e("code",[this._v("Compose")]),this._v(" 支持 Linux、macOS、Windows 10 三大平台。")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[e("code",[this._v("Compose")]),this._v(" 可以通过 Python 的包管理工具 "),e("code",[this._v("pip")]),this._v(" 进行安装，也可以直接下载编译好的二进制文件使用，甚至能够直接在 Docker 容器中运行。")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[e("code",[this._v("Docker for Mac")]),this._v(" 、"),e("code",[this._v("Docker for Windows")]),this._v(" 自带 "),e("code",[this._v("docker-compose")]),this._v(" 二进制文件，安装 Docker 之后可以直接使用。")])},function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ docker-compose --version\n\ndocker-compose version 1.17.1, build 6d101fb\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h3",{attrs:{id:"二进制包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二进制包","aria-hidden":"true"}},[this._v("#")]),this._v(" 二进制包")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://github.com/docker/compose/releases/download/1.17.1/docker-compose-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/local/bin/docker-compose\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Collecting docker-compose\n  Downloading docker-compose-1.17.1.tar.gz "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("149kB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": 149kB downloaded\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nSuccessfully installed docker-compose cached-property requests texttable websocket-client docker-py dockerpty six enum34 backports.ssl-match-hostname ipaddress\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h3",{attrs:{id:"bash-补全命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bash-补全命令","aria-hidden":"true"}},[this._v("#")]),this._v(" bash 补全命令")])},function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("curl")]),this._v(" -L https://raw.githubusercontent.com/docker/compose/1.8.0/contrib/completion/bash/docker-compose "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v(" /etc/bash_completion.d/docker-compose\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h3",{attrs:{id:"容器中执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器中执行","aria-hidden":"true"}},[this._v("#")]),this._v(" 容器中执行")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://github.com/docker/compose/releases/download/1.8.0/run.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/local/bin/docker-compose\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h3",{attrs:{id:"卸载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载","aria-hidden":"true"}},[this._v("#")]),this._v(" 卸载")])},function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("rm")]),this._v(" /usr/local/bin/docker-compose\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("如果是通过 "),e("code",[this._v("pip")]),this._v(" 安装的，则执行如下命令即可删除。")])},function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" pip uninstall docker-compose\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])}],!1,null,null,null);e.default=a.exports}}]);