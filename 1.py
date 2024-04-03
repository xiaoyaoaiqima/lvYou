import pandas as pd
import json

# 读取XLSX文件
df = pd.read_excel('人数收入增长率.xlsx')

# 获取第一行数据
header = df.columns.tolist()

# 将数据转换为JSON格式
data = df.to_dict(orient='records')

# 添加第一行数据到JSON
data_with_header = {"header": header, "data": data}

# 写入JSON文件
with open('人数收入增长率.json', 'w') as f:
    json.dump(data_with_header, f,ensure_ascii=False)