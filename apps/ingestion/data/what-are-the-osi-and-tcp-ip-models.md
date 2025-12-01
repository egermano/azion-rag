# What are the OSI and TCP/IP models? | Reference models for networks

We may not always be aware of it, but the computers and gadgets we use are in constant communication. For this to happen, the existence of common **standards** and **protocols** for **computer networks** and the **Internet** is fundamental. In this blog, we explain what the **OSI and TCP/IP models** are and their importance for the existence of the Internet as we know it today.

## What Is the OSI Model?

Imagine that you work in the marketing department of a large technology company. You live in Brazil, and your mother tongue is Portuguese. However, in your day-to-day life, you must communicate with English developers, Argentinian market analysts, an American content manager, and a Korean Marketing director who lives in California.

I didn't need to suggest it for you to guess that all this communication needs to happen in a single language (probably English).

The **OSI model** (Open Systems Interconnection) is a theoretical model created to help ensure that all communication between computers and devices occurs "in the same language" so that all devices involved can understand each other and messages are delivered correctly.

Thus, the OSI model divides a communication system into **seven layers**, each with its own function and specific **communication protocols**:

![representation of the osi model layers](/assets/learning/images/uploads/ip-diagram-1-eng.png 'osi model')

You can understand below what happens in each layer, from the "closest" to the end user (the **application layer**) to the most distant (the **physical layer**).

### Layer 7: Application Layer

As shown in the illustration, the interaction between the user and the data occurs in this layer, presented through interfaces and applications such as Internet browsers and email servers. Some of the most popular communication protocols used at the **application layer** are **HTTP**, **FTP**, **POP**, and [DNS](https://www.azion.com/en/learning/dns/what-is-dns/).

### Layer 6: Presentation Layer

The **presentation layer** works as a data translator for the network, encrypting, compresssing, and presenting the data.

### Layer 5: Session Layer

The **session layer** is where data transfer sessions between devices are initiated, managed, and terminated. It can also perform periodic checks to ensure that a new transfer session is resumed from the beginning so that there is no corruption of data and information in case of abrupt interruption.

### Layer 4: Transport Layer

The **transport layer** manages the transfer flow according to bandwidth and other specifications, mainly through protocols such as **TCP** and **UDP**. By using the TCP protocol, for example, this layer can break the data into segments to simplify its transfer and reassemble it at the other end of the communication.

### Layer 3: Network Layer

In addition to turning the segments offered by layer 4 into network packets, the **network layer** routes these packets, analyzing and selecting the best paths to carry out the transfer.

### Layer 2: Data Link Layer

The **data link layer** is composed of two parts: **LLC** (Logical Link Control) and **MAC** (Media Access Control). The first one identifies the physical protocols used by the network where the connection was established, while the second uses MAC addresses to establish connections between devices and permissions for transferring and receiving data.

### Layer 1: Physical Layer

This is where the physical transfer of the raw data takes place. Bits are transferred using electrical pulses, light or radio waves, either through cables or wireless technology.

## What is the TCP/IP Model?

Despite being a detailed and organized model of communication between devices on a network, the OSI model is **a theoretical model**, as mentioned above. It was designed to enable communication over any kind of network, so it works as a **reference model**.

On the other hand, the TCP/IP model is a specific implementation of the OSI model specifically aimed for the Internet. It was derived due to the need of standardization of other technologies of the network stack. Thus, this model focuses more on establishing specific standard protocols.

![representaltion of the tcp/ip model layers](/assets/learning/images/uploads/ip-diagram-2-eng.png 'tcp/ip model')

### Layer 4: Application Layer

You can say that the application layer on the TCP/IP model condenses layers 5, 6, and 7 of the OSI model. This means that all protocols for establishing and maintaining sessions, assembling and presenting data, and user-machine interaction are present within this layer (such as HTTP, SMTP, Telnet, FTP, DNS, etc.). Unlike the OSI model, the TCP/IP application layer is also concerned with how applications interpret incoming data.

### Layer 3: Transport Layer

Corresponding to layer 4 of the OSI model (also called "transport layer"), it's responsible for ent-to-end communication over the network using the TCP and UDP protocols.

### Layer 2: Internet Layer

Correlated to OSI layer 3 (network layer), it's responsible for creating network packets and routing them along the best possible path. The main protocol used in this layer is **IP**, which identifies the origin and destination of transferred data.

### Layer 1: Network Access Layer

Here, we have a mixture of layers 1 (physical) and 2 (network link) of the OSI model. In this case, we're referring to the entire physical and logical structure that allows communication between computers and other devices. It's based on standards such as **Ethernet**, **Token Ring**, **Frame Relay**, and **ATM**.

## OSI and TCP/IP Models and Communication Protocols

As we demonstrate in this article, the OSI and TCP/IP models were created to organize and standardize the different processes involved in the communication of networked computers, and, for this purpose, using open and widely disseminated protocols is fundamental.

In future posts, we'll analyze how these protocols are used on the Azion Web Platform and how the option for open standards brings several benefits.

You can also find out how Azion offers complete protection for the application layer with our [DDoS Protection](https://www.azion.com/en/learning/ddos/what-is-ddos-protection-and-mitigation/) and [WAF](https://www.azion.com/en/products/web-application-firewall/) guarantees the security of your network and infrastructure with [Network Layer Protection](https://www.azion.com/en/products/network-layer-protection/).
