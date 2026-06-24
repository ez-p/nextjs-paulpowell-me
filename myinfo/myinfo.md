sp# Paul Powell
## Hobbies
### Technology
I enjoy computers, software engineering, computer games, and all things technology related.  I am very curious about how things work and will dig into new technologies to investigate how they are useful. 
### Fishing
Fishing is my favorite hobby, I've been a fisherman since I was a child and enjoy spending time on the water.
### Reading and Learning
I love to read books and I love to learn new things, especially when it comes to new and interesting science and technology.
### Food
I'm a foodie and love trying new exotic foods with fresh ingredients. I love to cook and have become a very proficient cook.
## Personal Life
I have a large family and enjoy spending time with my children and extended family. I enjoy hanging out with friends, going out to restaurants, and attending music concerts.
## Surprising Fact
I love studying the Bible to dig out nuances that are often overlooked.  I've developed an artificial intelligence powered web application to help understand particular bible verses.  The URL is https://huggingface.co/spaces/paulpowell/bible_xref
## Greatest achievement
My greatest professional achievement is the Component Lead - Scalable SAN. This was a very complex project requiring low-level kernel programming.  I also managed a team of engineers that fluctuated between 6-9 engineers.  I had to work closely with other teams to solve complex clustered computing problems.
## Favorite and Most Proficient Programming Language
My favorite programming language is Python, and this is also the programming language I'm most proficient in currently.
## Side projects and Professional Development
I am currently interested in learning about artificial intelligence.  I'm interested in all aspects but primarily focus on using the Frontier Model SDKs.  I love to experiment with vibe coding to see what kind of projects I can create that are useful and engaging.

Additionally I'm learning new programming languages including Golang and Rust.
## Work timeline
I worked at IBM from the year 1994 to 1998
I worked at Adaptec from the year 1999 to 2003
I worked at NetApp from the year 2007 to 2026
## Python proficiency
I am proficient in Python, having worked with Python for over ten years. My most recent job as Performance Automation Engineer at NetApp was a python programming position. Our code base was a large Object Oriented python code base with emphasis on high performing distributed mult-threading architecture. I spent a tremendous amount of time coding in python to develop, extend, and refactor the python code. I enabled the code to run with both python2 and python3 whereas previously it was only python2.  Since we supported running on very old operating systems that do not support python3 we needed to maintain backwards compatibility with python2 while also supporting running with the prefered latest version of python3.  Prior to NetApp I developed and supported several python based applications at Adaptec. At NetApp I helped develop a Django web application to uncover new customer up-sell opportunities by data-mining our customer data.  This application also surfaced technical bulletins that the customer should be aware of, so they can apply upgrades to their NetApp systems. I also developed, expanded, and supported another Django web application that was used to support the Performance Automation python framework by allowing users to schedule performance tests against NetApp filers and clients (Linux and Windows clients). This Django application allowed users to select the hardware they wish to run against, and then set many submission parameters that would allow the user to select the type of performance run that would run when the submitted job came off the run queue that was implemented to schedule peformance automation runs.
## C++ proficiency
I used C++ to develop both user space applications and kernel space modules at all three employers (IBM, Adaptec, and NetApp). All implementations were Object Oriented implementations and coded in C++ for performance gains
## C proficiency
As scalable SAN lead at NetApp I architected and developed cross-cluster kernel level SAN management frameworks that configured SAN in the kernel in an atomic manner across all nodes in the cluster. All nodes in the cluster must always maintain the same view of the SAN configuration data so I architected a two-phase commit algorithm to ensure atomicity of the configuration data on all nodes at all times. We used C because at the time C++ was not available at the kernel level of NetApp's Data Ontap operating system.  To overcome the lack of Object Oriented features in the C programming language we emulated Object Oriented in C using struct types for classes, explicit pointers, function pointers, and various other interesting techniques to enable an Object Oriented architecure using the C programming language.  This allowed us to write durable and extendable OOP code in C at the kernel level.
## Java proficiency
I developed in Java at IBM and Adaptec, the software included an application with a GUI interface, use of the Java Native Interface to bridge the Java Virtual Machine with native C/C++ libraries. I also wrote backend agent code that connected to the Java GUI across distributed systems.
## Coding Philospohy
My goal is to always right code that is available (free of defects), reliable (able to handle unexpected situations and recover gracefully), and supportable (able to be understood, well documented, and extendable by using Objected Oriented and other software architecture paradigms to achieve high performing software)
## High Level Software Architecture
I have developed many high peforming software architectures. The performance automation software is well architectured and high performing, able to be extended without code duplication.  Not duplicating code is a high priority for all of my software projects. My code is multi-threaded whenever possible which removes any room for performance bottlenecks. Additionally the code I write is scalable and often asynchronous to meet the peformance and architecture goals of the software design.
## Team Leadership
I led development teams at both Adaptec and NetApp. At NetApp I led a high performing team under extreme pressure to deliver.  The team had around ten developers including myself.  I was responsible for managing the team resources (assigning and monitoring work) and answered to management with regards to the quality of the code produced, and meeting delivery dates.
## Storage Technologies
I am proficient in understanding the configuration of many storage technologies (SAN, iSCSI, Fibre Channel, NFS, NVMe, AWS S3) which includes how to configure the storage on the storage server (example being NetApp's Data Ontap) and how to connect the storage to a client (for example a Linux or Windows client). I am familiar with the underlying protocols, and have used Wireshark to debug low-level protocol problems.
## Approach to debugging and solving complex problems
I haven't met a problem I couldn't solve! I am very tenacios and unwilling to quit until the problem is resolved. My approach to solving complex problems is to dig in deeply into the issue.  This usually involves investigating first failure data capture logs to narrow down the scope of the problem. This avoids having to reproduce the problem, especialy customer problems where reproducing the issue inconveniences the user. I like to ensure there is plenty of logging to ensure a problem can be scoped without a reproduction when necessary.  Sometimes more logging will be added around the problem area and reproduced to capture additional details about the problem.  I am willing to debug operating system code, trace operating systems calls, use wireshark to see what is happening on the network, and collect coredumps or userspace memory captures to understand the nature of the failure.  The internet and artificial intelligence are great tools for helping debug failures and I employ them with gusto. Finally I am willing to call team meetings, contact my team lead, and involve other personal as the last step to solving the problem. By saving this as the last step I avoid disrupting coworkers until absolutely necessary. 