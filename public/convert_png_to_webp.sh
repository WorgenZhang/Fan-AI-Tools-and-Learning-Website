
#!/bin/bash

# 获取当前脚本所在的目录（即当前工作目录）
current_dir=$(pwd)

echo "正在扫描目录: $current_dir"

# 使用 for 循环遍历当前目录下的所有 .png 文件
# 注意：这里只处理当前目录，不包括子目录
for png_file in *.png; do
    # 检查是否真的存在 .png 文件（防止没有匹配到文件时原样输出 *.png）
    if [[ -f "$png_file" ]]; then
        
        # 1. 获取不带 .png 后缀的文件名
        # 例如：image.png -> image
        filename="${png_file%.png}"
        
        # 2. 构建对应的 webp 文件名
        # 例如：image -> image.webp
        webp_file="${filename}.webp"
        
        # 3. 检查对应的 .webp 文件是否存在
        if [[ -f "$webp_file" ]]; then
            echo "跳过: $png_file (对应 $webp_file 已存在)"
        else
            # 4. 如果 .webp 不存在，则执行转换命令
            echo "转换: $png_file -> $webp_file"
            cwebp -q 80 "$png_file" -o "$webp_file"
            
            # 可选：检查命令是否执行成功
            if [[ $? -eq 0 ]]; then
                echo "成功: $png_file 转换完成"
            else
                echo "错误: $png_file 转换失败"
            fi
        fi
    fi
done

echo "处理完成！"
