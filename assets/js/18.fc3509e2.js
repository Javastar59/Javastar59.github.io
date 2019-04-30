(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{223:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("div",{staticClass:"content"},[e("h3",{attrs:{id:"redis单例模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis单例模式","aria-hidden":"true"}},[s._v("#")]),s._v(" Redis单例模式")]),s._v(" "),e("blockquote",[e("p",[s._v("redis单例模式，docker-compose.yml 配置如下：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("version: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\nservices:\n  reids:\n    restart: always\n    image: redis:4\n    container_name: redis\n    ports:\n      - 6379:6379\n    volumes:\n      - /usr/local/redis/data:/data\n      - /usr/local/redis/redis.conf:/etc/redis/redis.conf\n    command: redis-server /etc/redis/redis.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("blockquote",[e("p",[s._v("创建容器时，该目录下的配置文件 /usr/local/redis/redis.conf 必须存在，否则数据卷同步会错！")])]),s._v(" "),e("h3",{attrs:{id:"redis单例配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis单例配置文件","aria-hidden":"true"}},[s._v("#")]),s._v(" Redis单例配置文件")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("bind 0.0.0.0\nprotected-mode no\nport 6379\ntcp-backlog 511\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" 0\ntcp-keepalive 300\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################# GENERAL #####################################")]),s._v("\ndaemonize no\nsupervised no\npidfile /var/run/redis_6379.pid\nloglevel notice\nlogfile "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\ndatabases 10\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################ SNAPSHOTTING  ################################")]),s._v("\nsave 1 1\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#save 900 1")]),s._v("\nsave 300 10\nsave 60 10000\nstop-writes-on-bgsave-error "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nrdbcompression "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nrdbchecksum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\ndbfilename dump.rdb\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" ./\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################# REPLICATION #################################")]),s._v("\nslave-serve-stale-data "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nslave-read-only "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nrepl-diskless-sync no\nrepl-diskless-sync-delay 5\nrepl-disable-tcp-nodelay no\nslave-priority 100\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br")])]),e("h3",{attrs:{id:"搭建-redis-集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建-redis-集群","aria-hidden":"true"}},[s._v("#")]),s._v(" 搭建 Redis 集群")]),s._v(" "),e("blockquote",[e("p",[s._v("搭建一主两从环境，docker-compose.yml 配置如下：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("version: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\nservices:\n  master:\n    image: redis\n    container_name: redis-master\n    ports:\n      - 6379:6379\n\n  slave1:\n    image: redis\n    container_name: redis-slave-1\n    ports:\n      - 6380:6379\n    command: redis-server --slaveof redis-master 6379\n\n  slave2:\n    image: redis\n    container_name: redis-slave-2\n    ports:\n      - 6381:6379\n    command: redis-server --slaveof redis-master 6379\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("h3",{attrs:{id:"搭建-sentinel-集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建-sentinel-集群","aria-hidden":"true"}},[s._v("#")]),s._v(" 搭建 Sentinel 集群")]),s._v(" "),e("blockquote",[e("p",[s._v("至少需要创建三个 Sentinel 服务，docker-compose.yml 配置如下：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("version: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\nservices:\n  sentinel1:\n    image: redis\n    container_name: redis-sentinel-1\n    ports:\n      - 26379:26379\n    command: redis-sentinel /usr/local/etc/redis/sentinel.conf\n    volumes:\n      - ./sentinel1.conf:/usr/local/etc/redis/sentinel.conf\n\n  sentinel2:\n    image: redis\n    container_name: redis-sentinel-2\n    ports:\n      - 26380:26379\n    command: redis-sentinel /usr/local/etc/redis/sentinel.conf\n    volumes:\n      - ./sentinel2.conf:/usr/local/etc/redis/sentinel.conf\n\n  sentinel3:\n    image: redis\n    container_name: redis-sentinel-3\n    ports:\n      - 26381:26379\n    command: redis-sentinel /usr/local/etc/redis/sentinel.conf\n    volumes:\n      - ./sentinel3.conf:/usr/local/etc/redis/sentinel.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])]),e("h3",{attrs:{id:"修改-sentinel-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改-sentinel-配置文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改 Sentinel 配置文件")]),s._v(" "),e("p",[s._v("需要三份 sentinel.conf 配置文件，分别为 "),e("code",[s._v("sentinel1.conf")]),s._v("，"),e("code",[s._v("sentinel2.conf")]),s._v("，"),e("code",[s._v("sentinel3.conf")]),s._v("，配置文件内容相同")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("port 26379\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /tmp\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义集群名，其中 127.0.0.1 为 redis-master 的 ip，6379 为 redis-master 的端口，2 为最小投票数（因为有 3 台 Sentinel 所以可以设置成 2）")]),s._v("\nsentinel monitor mymaster 127.0.0.1 6379 2\nsentinel down-after-milliseconds mymaster 30000\nsentinel parallel-syncs mymaster 1\nsentinel failover-timeout mymaster 180000\nsentinel deny-scripts-reconfig "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"查看集群是否生效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看集群是否生效","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看集群是否生效")]),s._v(" "),e("p",[s._v("进入 Sentinel 容器，使用 Sentinel API 查看监控情况：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker exec -it redis-sentinel-1 /bin/bash\nredis-cli -p 26379\nsentinel master mymaster\nsentinel slaves mymaster\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])}],!1,null,null,null);n.default=t.exports}}]);