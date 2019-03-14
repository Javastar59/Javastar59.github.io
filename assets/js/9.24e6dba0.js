(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{221:function(_,v,e){"use strict";e.r(v);var s=e(0),t=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("div",{staticClass:"content"},[e("p",[e("img",{attrs:{src:"https://cdn.star59.top/bg/20190311/vue3bGcFGEut.png",alt:"mysql"}})]),_._v(" "),e("h3",{attrs:{id:"mysql-优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-优化","aria-hidden":"true"}},[_._v("#")]),_._v(" MySQL 优化")]),_._v(" "),e("ul",[e("li",[_._v("表关联查询时务必遵循 "),e("strong",[_._v("小表驱动大表")]),_._v(" 原则；")]),_._v(" "),e("li",[_._v("使用查询语句 "),e("code",[_._v("where")]),_._v(" 条件时，不允许出现 "),e("strong",[_._v("函数")]),_._v("，否则索引会失效；")]),_._v(" "),e("li",[_._v("使用单表查询时，相同字段尽量不要用 "),e("code",[_._v("OR")]),_._v("，因为可能导致索引失效，比如："),e("code",[_._v("SELECT * FROM table WHERE name = '手机' OR name = '电脑'")]),_._v("，可以使用 "),e("code",[_._v("UNION")]),_._v(" 替代；")]),_._v(" "),e("li",[e("code",[_._v("LIKE")]),_._v(" 语句不允许使用 "),e("code",[_._v("%")]),_._v(" 开头，否则索引会失效；")]),_._v(" "),e("li",[_._v("组合索引一定要遵循 "),e("strong",[_._v("从左到右")]),_._v(" 原则，否则索引会失效；比如："),e("code",[_._v("SELECT * FROM table WHERE name = '张三' AND age = 18")]),_._v("，那么该组合索引必须是 "),e("code",[_._v("name,age")]),_._v(" 形式；")]),_._v(" "),e("li",[_._v("索引不宜过多，根据实际情况决定，尽量不要超过 10 个；")]),_._v(" "),e("li",[_._v("每张表都必须有 "),e("strong",[_._v("主键")]),_._v("，达到加快查询效率的目的；")]),_._v(" "),e("li",[_._v("分表，可根据业务字段尾数中的个位或十位或百位（以此类推）做表名达到分表的目的；")]),_._v(" "),e("li",[_._v("分库，可根据业务字段尾数中的个位或十位或百位（以此类推）做库名达到分库的目的；")]),_._v(" "),e("li",[_._v("表分区，类似于硬盘分区，可以将某个时间段的数据放在分区里，加快查询速度，可以配合 "),e("strong",[_._v("分表 + 表分区")]),_._v(" 结合使用；")])]),_._v(" "),e("h3",{attrs:{id:"mysql-explain-语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-explain-语句","aria-hidden":"true"}},[_._v("#")]),_._v(" MySQL EXPLAIN 语句")]),_._v(" "),e("p",[e("code",[_._v("EXPLAIN")]),_._v(" 显示了 MySQL 如何使用索引来处理 "),e("code",[_._v("SELECT")]),_._v(" 语句以及连接表。可以帮助选择更好的索引和写出更优化的查询语句。")]),_._v(" "),e("p",[_._v("使用方法，在 "),e("code",[_._v("SELECT")]),_._v(" 语句前加上 "),e("code",[_._v("EXPLAIN")]),_._v(" 即可，如：")]),_._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("EXPLAIN")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("SELECT")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("*")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("FROM")]),_._v(" tb_item "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("WHERE")]),_._v(" cid "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("IN")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("SELECT")]),_._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("FROM")]),_._v(" tb_item_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br")])]),e("ol",[e("li",[e("p",[e("strong",[_._v("id：")]),_._v(" SELECT 识别符。这是 SELECT 的查询序列号")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("select_type：")]),_._v(" SELECT类型,可以为以下任何一种")]),_._v(" "),e("ul",[e("li",[_._v("SIMPLE: 简单 SELECT(不使用 UNION 或子查询)")]),_._v(" "),e("li",[_._v("PRIMARY: 最外面的 SELECT")]),_._v(" "),e("li",[_._v("UNION: UNION 中的第二个或后面的 SELECT 语句")]),_._v(" "),e("li",[_._v("DEPENDENT UNION: UNION 中的第二个或后面的 SELECT 语句,取决于外面的查询")]),_._v(" "),e("li",[_._v("UNION RESULT: UNION 的结果")]),_._v(" "),e("li",[_._v("SUBQUERY: 子查询中的第一个 SELECT")]),_._v(" "),e("li",[_._v("DEPENDENT SUBQUERY: 子查询中的第一个 SELECT,取决于外面的查询")]),_._v(" "),e("li",[_._v("DERIVED: 导出表的 SELECT(FROM 子句的子查询)")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("table：")]),_._v(" 输出的行所引用的表")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("partitions：")]),_._v(" 表分区")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("type：")]),_._v(" 联接类型。下面给出各种联接类型，按照 "),e("strong",[_._v("从最佳类型到最坏类型")]),_._v(" 进行排序")]),_._v(" "),e("ul",[e("li",[_._v("system: 表仅有一行(=系统表)。这是 const 联接类型的一个特例。")]),_._v(" "),e("li",[_._v("const: 表最多有一个匹配行,它将在查询开始时被读取。因为仅有一行,在这行的列值可被优化器剩余部分认为是常数。const 表很快,因为它们只读取一次!")]),_._v(" "),e("li",[_._v("eq_ref: 对于每个来自于前面的表的行组合, 从该表中读取一行。这可能是最好的联接类型, 除了 const 类型。")]),_._v(" "),e("li",[_._v("ref: 对于每个来自于前面的表的行组合, 所有有匹配索引值的行将从这张表中读取。")]),_._v(" "),e("li",[_._v("ref_or_null: 该联接类型如同 ref,但是添加了 MySQL 可以专门搜索包含 NULL 值的行。")]),_._v(" "),e("li",[_._v("index_merge: 该联接类型表示使用了索引合并优化方法。")]),_._v(" "),e("li",[_._v("unique_subquery: 该类型替换了下面形式的 IN 子查询的 ref: "),e("code",[_._v("value IN (SELECT primary_key FROM single_table WHERE some_expr) unique_subquery")]),_._v(" 是一个索引查找函数, 可以完全替换子查询, 效率更高。")]),_._v(" "),e("li",[_._v("index_subquery: 该联接类型类似于 unique_subquery。可以替换 IN 子查询, 但只适合下列形式的子查询中的非唯一索引: "),e("code",[_._v("value IN (SELECT key_column FROM single_table WHERE some_expr)")])]),_._v(" "),e("li",[_._v("range: 只检索给定范围的行,使用一个索引来选择行。")]),_._v(" "),e("li",[_._v("index: 该联接类型与 ALL 相同,除了只有索引树被扫描。这通常比 ALL 快,因为索引文件通常比数据文件小。")]),_._v(" "),e("li",[_._v("ALL: 对于每个来自于先前的表的行组合, 进行完整的表扫描。")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("possible_keys：")]),_._v(" 指出 MySQL 能使用哪个索引在该表中找到行")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("key：")]),_._v(" 显示 MySQL 实际决定使用的键(索引)。如果没有选择索引, 键是 NULL。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("key_len：")]),_._v(" 显示 MySQL 决定使用的键长度。如果键是 NULL, 则长度为 NULL。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("ref：")]),_._v(" 显示使用哪个列或常数与 key 一起从表中选择行。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("rows：")]),_._v(" 显示 MySQL 认为它执行查询时必须检查的行数。多行之间的数据相乘可以估算要处理的行数。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("filtered：")]),_._v(" 显示了通过条件过滤出的行数的百分比估计值。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("Extra：")]),_._v(" 该列包含 MySQL 解决查询的详细信息")]),_._v(" "),e("ul",[e("li",[_._v("Distinct: MySQL 发现第 1 个匹配行后,停止为当前的行组合搜索更多的行。")]),_._v(" "),e("li",[_._v("Not exists: MySQL 能够对查询进行 LEFT JOIN 优化, 发现 1 个匹配 LEFT JOIN 标准的行后, 不再为前面的的行组合在该表内检查更多的行。")]),_._v(" "),e("li",[_._v("range checked for each record (index map: #): MySQL 没有发现好的可以使用的索引, 但发现如果来自前面的表的列值已知, 可能部分索引可以使用。")]),_._v(" "),e("li",[_._v("Using filesort: MySQL 需要额外的一次传递, 以找出如何按排序顺序检索行。")]),_._v(" "),e("li",[_._v("Using index: 从只使用索引树中的信息而不需要进一步搜索读取实际的行来检索表中的列信息。")]),_._v(" "),e("li",[_._v("Using temporary: 为了解决查询, MySQL 需要创建一个临时表来容纳结果。")]),_._v(" "),e("li",[_._v("Using where: WHERE 子句用于限制哪一个行匹配下一个表或发送到客户。")]),_._v(" "),e("li",[_._v("Using sort_union(...), Using union(...), Using intersect(...): 这些函数说明如何为 index_merge 联接类型合并索引扫描。")]),_._v(" "),e("li",[_._v("Using index for group-by: 类似于访问表的 Using index 方式,Using index for group-by 表示 MySQL 发现了一个索引,可以用来查询 GROUP BY 或 DISTINCT 查询的所有列, 而不要额外搜索硬盘访问实际的表。")])])])])])}],!1,null,null,null);v.default=t.exports}}]);