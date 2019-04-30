(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{219:function(e,v,a){"use strict";a.r(v);var _=a(0),s=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,v=e.$createElement,a=e._self._c||v;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"docker-compose-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-常用命令","aria-hidden":"true"}},[e._v("#")]),e._v(" docker-compose 常用命令")]),e._v(" "),a("h3",{attrs:{id:"前台运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前台运行","aria-hidden":"true"}},[e._v("#")]),e._v(" 前台运行")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker-compose up\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"后台运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后台运行","aria-hidden":"true"}},[e._v("#")]),e._v(" 后台运行")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker-compose up -d\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker-compose start\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"停止"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker-compose stop\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"停止并移除容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止并移除容器","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止并移除容器")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker-compose down\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"docker-compose-命令说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-命令说明","aria-hidden":"true"}},[e._v("#")]),e._v(" docker-compose 命令说明")]),e._v(" "),a("h3",{attrs:{id:"命令对象与格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令对象与格式","aria-hidden":"true"}},[e._v("#")]),e._v(" 命令对象与格式")]),e._v(" "),a("p",[e._v("对于 Compose 来说，大部分命令的对象既可以是项目本身，也可以指定为项目中的服务或者容器。如果没有特别的说明，命令对象将是项目，这意味着项目中所有的服务都会受到命令影响。")]),e._v(" "),a("p",[e._v("执行 "),a("code",[e._v("docker-compose [COMMAND] --help")]),e._v(" 或者 "),a("code",[e._v("docker-compose help [COMMAND]")]),e._v(" 可以查看具体某个命令的使用格式。")]),e._v(" "),a("p",[a("code",[e._v("docker-compose")]),e._v(" 命令的基本的使用格式是")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker-compose "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-f"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("COMMAND"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("ARGS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"命令选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令选项","aria-hidden":"true"}},[e._v("#")]),e._v(" 命令选项")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-f, --file FILE")]),e._v(" 指定使用的 Compose 模板文件，默认为 "),a("code",[e._v("docker-compose.yml")]),e._v("，可以多次指定。")]),e._v(" "),a("li",[a("code",[e._v("-p, --project-name NAME")]),e._v(" 指定项目名称，默认将使用所在目录名称作为项目名。")]),e._v(" "),a("li",[a("code",[e._v("--x-networking")]),e._v(" 使用 Docker 的可拔插网络后端特性")]),e._v(" "),a("li",[a("code",[e._v("--x-network-driver DRIVER")]),e._v(" 指定网络后端的驱动，默认为 "),a("code",[e._v("bridge")])]),e._v(" "),a("li",[a("code",[e._v("--verbose")]),e._v(" 输出更多调试信息。")]),e._v(" "),a("li",[a("code",[e._v("-v, --version")]),e._v(" 打印版本并退出。")])]),e._v(" "),a("h3",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("build")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose build [options] [SERVICE...]")]),e._v("。")]),e._v(" "),a("p",[e._v("构建（重新构建）项目中的服务容器。")]),e._v(" "),a("p",[e._v("服务容器一旦构建后，将会带上一个标记名，例如对于 web 项目中的一个 db 容器，可能是 web_db。")]),e._v(" "),a("p",[e._v("可以随时在项目目录下运行 "),a("code",[e._v("docker-compose build")]),e._v(" 来重新构建服务。")]),e._v(" "),a("p",[e._v("选项包括：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--force-rm")]),e._v(" 删除构建过程中的临时容器。")]),e._v(" "),a("li",[a("code",[e._v("--no-cache")]),e._v(" 构建镜像过程中不使用 cache（这将加长构建过程）。")]),e._v(" "),a("li",[a("code",[e._v("--pull")]),e._v(" 始终尝试通过 pull 来获取更新版本的镜像。")])]),e._v(" "),a("h3",{attrs:{id:"config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("config")])]),e._v(" "),a("p",[e._v("验证 Compose 文件格式是否正确，若正确则显示配置，若格式错误显示错误原因。")]),e._v(" "),a("h3",{attrs:{id:"down"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#down","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("down")])]),e._v(" "),a("p",[e._v("此命令将会停止 "),a("code",[e._v("up")]),e._v(" 命令所启动的容器，并移除网络")]),e._v(" "),a("h3",{attrs:{id:"exec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exec","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("exec")])]),e._v(" "),a("p",[e._v("进入指定的容器。")]),e._v(" "),a("h3",{attrs:{id:"help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#help","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("help")])]),e._v(" "),a("p",[e._v("获得一个命令的帮助。")]),e._v(" "),a("h3",{attrs:{id:"images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#images","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("images")])]),e._v(" "),a("p",[e._v("列出 Compose 文件中包含的镜像。")]),e._v(" "),a("h3",{attrs:{id:"kill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kill","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("kill")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose kill [options] [SERVICE...]")]),e._v("。")]),e._v(" "),a("p",[e._v("通过发送 "),a("code",[e._v("SIGKILL")]),e._v(" 信号来强制停止服务容器。")]),e._v(" "),a("p",[e._v("支持通过 "),a("code",[e._v("-s")]),e._v(" 参数来指定发送的信号，例如通过如下指令发送 "),a("code",[e._v("SIGINT")]),e._v(" 信号。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker-compose "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("kill")]),e._v(" -s SIGINT\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logs","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("logs")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose logs [options] [SERVICE...]")]),e._v("。")]),e._v(" "),a("p",[e._v("查看服务容器的输出。默认情况下，docker-compose 将对不同的服务输出使用不同的颜色来区分。可以通过 "),a("code",[e._v("--no-color")]),e._v(" 来关闭颜色。")]),e._v(" "),a("p",[e._v("该命令在调试问题的时候十分有用。")]),e._v(" "),a("h3",{attrs:{id:"pause"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pause","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("pause")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose pause [SERVICE...]")]),e._v("。")]),e._v(" "),a("p",[e._v("暂停一个服务容器。")]),e._v(" "),a("h3",{attrs:{id:"port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("port")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose port [options] SERVICE PRIVATE_PORT")]),e._v("。")]),e._v(" "),a("p",[e._v("打印某个容器端口所映射的公共端口。")]),e._v(" "),a("p",[e._v("选项：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--protocol=proto")]),e._v(" 指定端口协议，tcp（默认值）或者 udp。")]),e._v(" "),a("li",[a("code",[e._v("--index=index")]),e._v(" 如果同一服务存在多个容器，指定命令对象容器的序号（默认为 1）。")])]),e._v(" "),a("h3",{attrs:{id:"ps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ps","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("ps")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose ps [options] [SERVICE...]")]),e._v("。")]),e._v(" "),a("p",[e._v("列出项目中目前的所有容器。")]),e._v(" "),a("p",[e._v("选项：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-q")]),e._v(" 只打印容器的 ID 信息。")])]),e._v(" "),a("h3",{attrs:{id:"pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("pull")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose pull [options] [SERVICE...]")]),e._v("。")]),e._v(" "),a("p",[e._v("拉取服务依赖的镜像。")]),e._v(" "),a("p",[e._v("选项：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--ignore-pull-failures")]),e._v(" 忽略拉取镜像过程中的错误。")])]),e._v(" "),a("h3",{attrs:{id:"push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("push")])]),e._v(" "),a("p",[e._v("推送服务依赖的镜像到 Docker 镜像仓库。")]),e._v(" "),a("h3",{attrs:{id:"restart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restart","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("restart")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose restart [options] [SERVICE...]")]),e._v("。")]),e._v(" "),a("p",[e._v("重启项目中的服务。")]),e._v(" "),a("p",[e._v("选项：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-t, --timeout TIMEOUT")]),e._v(" 指定重启前停止容器的超时（默认为 10 秒）。")])]),e._v(" "),a("h3",{attrs:{id:"rm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rm","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("rm")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose rm [options] [SERVICE...]")]),e._v("。")]),e._v(" "),a("p",[e._v("删除所有（停止状态的）服务容器。推荐先执行 "),a("code",[e._v("docker-compose stop")]),e._v(" 命令来停止容器。")]),e._v(" "),a("p",[e._v("选项：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-f, --force")]),e._v(" 强制直接删除，包括非停止状态的容器。一般尽量不要使用该选项。")]),e._v(" "),a("li",[a("code",[e._v("-v")]),e._v(" 删除容器所挂载的数据卷。")])]),e._v(" "),a("h3",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("run")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose run [options] [-p PORT...] [-e KEY=VAL...] SERVICE [COMMAND] [ARGS...]")]),e._v("。")]),e._v(" "),a("p",[e._v("在指定服务上执行一个命令。")]),e._v(" "),a("p",[e._v("例如：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker-compose run ubuntu "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ping")]),e._v(" docker.com\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("将会启动一个 ubuntu 服务容器，并执行 "),a("code",[e._v("ping docker.com")]),e._v(" 命令。")]),e._v(" "),a("p",[e._v("默认情况下，如果存在关联，则所有关联的服务将会自动被启动，除非这些服务已经在运行中。")]),e._v(" "),a("p",[e._v("该命令类似启动容器后运行指定的命令，相关卷、链接等等都将会按照配置自动创建。")]),e._v(" "),a("p",[e._v("两个不同点：")]),e._v(" "),a("ul",[a("li",[e._v("给定命令将会覆盖原有的自动运行命令；")]),e._v(" "),a("li",[e._v("不会自动创建端口，以避免冲突。")])]),e._v(" "),a("p",[e._v("选项：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-d")]),e._v(" 后台运行容器。")]),e._v(" "),a("li",[a("code",[e._v("--name NAME")]),e._v(" 为容器指定一个名字。")]),e._v(" "),a("li",[a("code",[e._v("--entrypoint CMD")]),e._v(" 覆盖默认的容器启动指令。")]),e._v(" "),a("li",[a("code",[e._v("-e KEY=VAL")]),e._v(" 设置环境变量值，可多次使用选项来设置多个环境变量。")]),e._v(" "),a("li",[a("code",[e._v('-u, --user=""')]),e._v(" 指定运行容器的用户名或者 uid。")]),e._v(" "),a("li",[a("code",[e._v("--no-deps")]),e._v(" 不自动启动关联的服务容器。")]),e._v(" "),a("li",[a("code",[e._v("--rm")]),e._v(" 运行命令后自动删除容器，"),a("code",[e._v("d")]),e._v(" 模式下将忽略。")]),e._v(" "),a("li",[a("code",[e._v("-p, --publish=[]")]),e._v(" 映射容器端口到本地主机。")]),e._v(" "),a("li",[a("code",[e._v("--service-ports")]),e._v(" 配置服务端口并映射到本地主机。")]),e._v(" "),a("li",[a("code",[e._v("-T")]),e._v(" 不分配伪 tty，意味着依赖 tty 的指令将无法运行。")])]),e._v(" "),a("h3",{attrs:{id:"scale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scale","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("scale")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose scale [options] [SERVICE=NUM...]")]),e._v("。")]),e._v(" "),a("p",[e._v("设置指定服务运行的容器个数。")]),e._v(" "),a("p",[e._v("通过 "),a("code",[e._v("service=num")]),e._v(" 的参数来设置数量。例如：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker-compose scale web"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("3 db"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("2\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("将启动 3 个容器运行 web 服务，2 个容器运行 db 服务。")]),e._v(" "),a("p",[e._v("一般的，当指定数目多于该服务当前实际运行容器，将新创建并启动容器；反之，将停止容器。")]),e._v(" "),a("p",[e._v("选项：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-t, --timeout TIMEOUT")]),e._v(" 停止容器时候的超时（默认为 10 秒）。")])]),e._v(" "),a("h3",{attrs:{id:"start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("start")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose start [SERVICE...]")]),e._v("。")]),e._v(" "),a("p",[e._v("启动已经存在的服务容器。")]),e._v(" "),a("h3",{attrs:{id:"stop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("stop")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose stop [options] [SERVICE...]")]),e._v("。")]),e._v(" "),a("p",[e._v("停止已经处于运行状态的容器，但不删除它。通过 "),a("code",[e._v("docker-compose start")]),e._v(" 可以再次启动这些容器。")]),e._v(" "),a("p",[e._v("选项：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-t, --timeout TIMEOUT")]),e._v(" 停止容器时候的超时（默认为 10 秒）。")])]),e._v(" "),a("h3",{attrs:{id:"top"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#top","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("top")])]),e._v(" "),a("p",[e._v("查看各个服务容器内运行的进程。")]),e._v(" "),a("h3",{attrs:{id:"unpause"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unpause","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("unpause")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose unpause [SERVICE...]")]),e._v("。")]),e._v(" "),a("p",[e._v("恢复处于暂停状态中的服务。")]),e._v(" "),a("h3",{attrs:{id:"up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#up","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("up")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose up [options] [SERVICE...]")]),e._v("。")]),e._v(" "),a("p",[e._v("该命令十分强大，它将尝试自动完成包括构建镜像，（重新）创建服务，启动服务，并关联服务相关容器的一系列操作。")]),e._v(" "),a("p",[e._v("链接的服务都将会被自动启动，除非已经处于运行状态。")]),e._v(" "),a("p",[e._v("可以说，大部分时候都可以直接通过该命令来启动一个项目。")]),e._v(" "),a("p",[e._v("默认情况，"),a("code",[e._v("docker-compose up")]),e._v(" 启动的容器都在前台，控制台将会同时打印所有容器的输出信息，可以很方便进行调试。")]),e._v(" "),a("p",[e._v("当通过 "),a("code",[e._v("Ctrl-C")]),e._v(" 停止命令时，所有容器将会停止。")]),e._v(" "),a("p",[e._v("如果使用 "),a("code",[e._v("docker-compose up -d")]),e._v("，将会在后台启动并运行所有的容器。一般推荐生产环境下使用该选项。")]),e._v(" "),a("p",[e._v("默认情况，如果服务容器已经存在，"),a("code",[e._v("docker-compose up")]),e._v(" 将会尝试停止容器，然后重新创建（保持使用 "),a("code",[e._v("volumes-from")]),e._v(" 挂载的卷），以保证新启动的服务匹配 "),a("code",[e._v("docker-compose.yml")]),e._v(" 文件的最新内容。如果用户不希望容器被停止并重新创建，可以使用 "),a("code",[e._v("docker-compose up --no-recreate")]),e._v("。这样将只会启动处于停止状态的容器，而忽略已经运行的服务。如果用户只想重新部署某个服务，可以使用 "),a("code",[e._v("docker-compose up --no-deps -d <SERVICE_NAME>")]),e._v(" 来重新创建服务并后台停止旧服务，启动新服务，并不会影响到其所依赖的服务。")]),e._v(" "),a("p",[e._v("选项：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-d")]),e._v(" 在后台运行服务容器。")]),e._v(" "),a("li",[a("code",[e._v("--no-color")]),e._v(" 不使用颜色来区分不同的服务的控制台输出。")]),e._v(" "),a("li",[a("code",[e._v("--no-deps")]),e._v(" 不启动服务所链接的容器。")]),e._v(" "),a("li",[a("code",[e._v("--force-recreate")]),e._v(" 强制重新创建容器，不能与 "),a("code",[e._v("--no-recreate")]),e._v(" 同时使用。")]),e._v(" "),a("li",[a("code",[e._v("--no-recreate")]),e._v(" 如果容器已经存在了，则不重新创建，不能与 "),a("code",[e._v("--force-recreate")]),e._v(" 同时使用。")]),e._v(" "),a("li",[a("code",[e._v("--no-build")]),e._v(" 不自动构建缺失的服务镜像。")]),e._v(" "),a("li",[a("code",[e._v("-t, --timeout TIMEOUT")]),e._v(" 停止容器时候的超时（默认为 10 秒）。")])]),e._v(" "),a("h3",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("version")])]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("docker-compose version")]),e._v("。")]),e._v(" "),a("p",[e._v("打印版本信息。")])])}],!1,null,null,null);v.default=s.exports}}]);