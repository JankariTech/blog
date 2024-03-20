---
title: Ways to copy file with shutil module in Python
authorName: Salipa Gurung
authorAvatar: https://avatars.githubusercontent.com/u/53458341?v=4
authorLink: https://github.com/Salipa-Gurung
createdAt: March 11, 2024
tags: python, copy, shutil
banner: https://blog.jankaritech.com/src/assets/PythonCopyFileWithShutil/images/python_copy_file.png
---

Python provides many built-in modules to copy a file. We'll look into ways to copy file using `shutil` module in this blog post.

The standard utility module known as shutil is an abbreviation for shell utilities. Numerous functions in the Python shutil module helps with high-level file and directory operations. Using the shutil module, there are four common methods that provide an easy and efficient way to copy a file:

### 1. shutil.copy() method

```py
shutil.copy(source, destination, *, follow_symlinks=True)
```

This method copies the file of source to the directory or file specified in the destination and returns file's destination.

- shutil.copy() method copies file's data and file's permission mode.
- Metadata(file creation and modification time) of the file copied is not preserved.
- Source and destination should be path-like objects or strings.
- Destination can specify both file or directory. If the destination specify path to a directory, the file will be copied to destination directory with the basename of the source path.
- Copying symbolic link:

  - If `follow_symlinks=True`, destination will be a copy of the file that the symbolic link in source points to. Default value of parameter `follow_symlinks` is `True`.

  - If `follow_symlinks=False`, destination will be created as symbolic link.

  ```py
  # Import shell utility module
  import shutil

  #  Copy the content of source_file.txt to destination_file.txt
  shutil.copy('source_file.txt', 'destination_file.txt')
  ```

### 2. shutil.copy2() method

```py
shutil.copy2(source, destination, *, follow_symlinks=True)
```

The shutil.copy2() method provides additional functionality of preserving all the metadata of the file it can. Other characteristics are same as shutil.copy() method.
  - shutil.copy2() method copies file's data and file's permission mode.
  - Source and destination should be path-like objects or strings.
  - Destination can specify both file or directory. If the destination is directory, the file will be copied with the same name as of the source file name.

    ```py
    # Import shell utility module
    import shutil

    #  Copy the content of source_file.txt to destination_file.txt
    shutil.copy2('source_file.txt', 'destination_file.txt')
    ```

### 3. shutil.copyfile() method

```py
shutil.copyfile(source, destination, *, follow_symlinks=True)
```
Using this method, a file's content is copied from its source to its destination without any metadata.

  - Source and destination should be path-like objects or strings.
  - Destination path can only specify path to a file but cannot specify path to a directory.

    ```py
    # Import shell utility module
    import shutil

    #  Copy the content of source_file.txt to destination_file.txt
    shutil.copyfile('source_file.txt', 'destination_file.txt')
    ```

### 4. shutil.copyfileobj() method

```py
shutil.copyfileobj(fsrc, fdst, length)
```

- Source and destination must be file-like objects.
- This method copies contents of file object to the destination file object.
- Length parameter which is optional, specifies an integer value for buffer size.
- It does not preserve metadata
- It does not return any value.

  ```py
  # Import shell utility module
  import shutil

  # Create file objects
  source_file_object = open("../hello.txt", "r")
  destination_file_object = open("CopyFile/copyFalseSrcPath.txt", "w")

  # Copy content of file object to another file object
  shutil.copyfileobj(source_file_object, destination_file_object)
  ```

### Points to prevent common mistakes:

 - The source and destination cannot specify the same path in shutil.copy(), shutil.copy2() and shutil.copyfile(). If source and destination specify same file path then exception `SameFileError` will be raised. This error is not raised in shutil.copyfileobj() as it overwrites the file file if it already exists.
 - An error `FileNotFound` will be raised if the source specifies a path to a file that is not present.
