---
title: Python's `shutil` module for Automated Testing
authorName: Salipa Gurung
authorAvatar: https://avatars.githubusercontent.com/u/53458341?v=4
authorLink: https://github.com/Salipa-Gurung
createdAt: August 20, 2024
tags: python, copy, shutil, testing
banner: https://blog.jankaritech.com/src/assets/PythonCopyFileWithShutil/images/python_copy_file.png
---

## Introduction

In the dynamic domain of software development, ensuring application quality through automated testing is vital. Automated testing involves running numerous tests that require a specific setup of files and directories. Setting up and tearing down test environments efficiently is a significant part of this process which can often be a tedious and error-prone task without the right tools.

Finding the right tools to simplify tasks can make a big difference. The standard utility module known as shutil is an abbreviation for shell utilities. It provides high-level file operations for copying, moving, and removing files and directories that can simplify managing test environments. This blog explains how the shutil module can streamline file operations in automated software testing.

To ensure that each test starts with the correct environment, we need to automate the setup process, creating a consistent and isolated test environment.

## Getting started with `shutil`

Shutil module is part of the Python Standard Library, so we don’t need to install anything extra. Simply import it at the beginning of your script.

```py
# Import shell utility module
import shutil
```

## Essential file copying methods

While testing an application, we often require a specific set of data files. Instead of manually copying files, four common methods provide an easy and efficient way to copy a file using the shutil module.

1. [shutil.copy()](#1-shutilcopy-method)
2. [shutil.copy2()](#2-shutilcopy2-method)
3. [shutil.copyfile()](#3-shutilcopyfile-method)
4. [shutil.copyfileobj()](#4-shutilcopyfileobj-method)

### 1. shutil.copy() method

```py
shutil.copy(source, destination, *, follow_symlinks=True)
```

This method copies the source file to the directory or file specified in the destination and returns the file's destination. It copies the file's data and the file's permission mode but metadata (file creation and modification time) of the file copied is not preserved. The source and destination should be path-like objects or strings. The destination can specify both file or directory. If the destination specifies a path to a directory, the file will be copied to the destination directory with the file name of the source path.
While working with symbolic link:

- If `follow_symlinks=True`, the destination will be a copy of the file that the symbolic link in source points to. The default value of parameter `follow_symlinks` is `True`.

- If `follow_symlinks=False`, destination will be created as a symbolic link.

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

The shutil.copy2() method provides the additional functionality of preserving all the metadata of the file it can. Other characteristics are the same as for the shutil.copy() method. The destination can specify both file or directory. If the destination is a directory, the file will be copied with the same name as the source file name.

```py
# Import shell utility module
import shutil

#  Copy the content of source_file.txt to destination_file.txt
shutil.copy2('source_file.txt', 'destination_file.txt')
```

I used this method while automating test as it copies the file content along with most of its associated metadata so that we can programmatically achieve the same result as copying and pasting a file using keyboard shortcuts in a graphical file manager and it also closely replicates the behavior of a typical copy and paste operation using a mouse in graphical file manager.

### 3. shutil.copyfile() method

```py
shutil.copyfile(source, destination, *, follow_symlinks=True)
```

Using this method, a file's content is copied from its source to its destination without metadata. The source and destination should be path-like objects or strings. Destination path can only specify a path to a file but cannot specify a path to a directory.

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

This method copies the contents of the source file object to the destination file object. The source and destination must be file-like objects. It does not preserve metadata and does not return any value. The optional length parameter specifies an integer value for buffer size.

```py
# Import shell utility module
import shutil

# Create file objects
source_file_object = open("../hello.txt", "r")
destination_file_object = open("CopyFile/copyFalseSrcPath.txt", "w")

# Copy the content of the file object to another file object
shutil.copyfileobj(source_file_object, destination_file_object)
```

## Preventing common mistakes:

- The source and destination cannot specify the same path in `shutil.copy()`, `shutil.copy2()` and `shutil.copyfile()`. If the source and destination specify the same file path then the exception "SameFileError" will be raised. This error is not raised in shutil.copyfileobj() as it overwrites the destination file if it already exists.
- An error "FileNotFound" will be raised if the source specifies a path to a file that is not present.

## Conclusion

Each method provides different aspects of file operations, providing flexibility and power to meet various testing needs. Python's `shutil` module offers essential tools for efficient file operations in software testing:

- `shutil.copy`: Great for basic file copying, including permissions.
- `shutil.copy2`: Ideal for copying files along with most of their metadata, including timestamps.
- `shutil.copyfile`: Best for fast, simple content-copying without metadata.
- `shutil.copyfileobj`: Enables precise copying between file-like objects.

Some other commonly used utility functions that can be helpful while automating our tests are:

1. `shutil.mkdirs()`: Creates directories recursively. Useful for setting up directory structures needed for testing or organizing files.
2. `shutil.copytree()`: Recursively copies an entire directory tree. Ideal for duplicating complex directory structures, including all files and sub-directories, to create or backup environments for testing or deployment.
3. `shutil.rmtree()`: Deletes a directory tree recursively. Essential for cleaning up after tests or removing temporary directories and their contents completely.
4. `shutil.move()`: Moves a file or directory to another location. Efficiently relocates files or directories within the filesystem, facilitating organization or deployment process.
5. `shutil.make_archive()`: Creates an archive (such as AIP or TAR) of a directory and its contents. Useful for packaging directories for distributions or backup purposes.

More utility functions and detailed descriptions can be found in the [official documentation](https://docs.python.org/3/library/shutil.html).

The `shutil` module in Python serves as a versatile toolset not only in software testing but also across diverse fields of software development such as version control and deployment, data science and machine learning, IT and system administration, research and academia, and many more.

Integrating `shutil` into our testing processes, we can perform complex file operations with minimal code, saving our time and effort and allowing us to focus on developing high-quality software.
