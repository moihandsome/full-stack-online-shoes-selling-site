USE [Demo]
GO
/****** Object:  Table [dbo].[accessories]    Script Date: 01/07/2021 5:27:25 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[accessories](
	[accessoryId] [varchar](20) NULL,
	[name] [varchar](100) NULL,
	[price] [int] NULL,
	[quantity] [int] NULL,
	[url] [text] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[news]    Script Date: 01/07/2021 5:27:25 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[news](
	[newsId] [nvarchar](200) NOT NULL,
	[title] [ntext] NULL,
	[detail] [ntext] NULL,
	[url] [text] NULL,
	[time] [nvarchar](50) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[notifications]    Script Date: 01/07/2021 5:27:25 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[notifications](
	[notiId] [nvarchar](200) NULL,
	[title] [ntext] NULL,
	[detail] [ntext] NULL,
	[time] [nvarchar](50) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[orderDetails]    Script Date: 01/07/2021 5:27:25 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orderDetails](
	[orderId] [nvarchar](50) NOT NULL,
	[productId] [varchar](20) NOT NULL,
	[name] [nvarchar](100) NULL,
	[price] [int] NULL,
	[quantity] [int] NULL,
 CONSTRAINT [orderDetail] PRIMARY KEY CLUSTERED 
(
	[orderId] ASC,
	[productId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[orders]    Script Date: 01/07/2021 5:27:25 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orders](
	[orderId] [nvarchar](50) NOT NULL,
	[fullname] [nvarchar](50) NULL,
	[phone] [nvarchar](50) NULL,
	[address] [nvarchar](50) NULL,
	[country] [nvarchar](50) NULL,
	[state] [nvarchar](50) NULL,
	[zipcode] [nvarchar](50) NULL,
	[paymentMethod] [nvarchar](50) NULL,
	[totalPrice] [int] NULL,
	[status] [nvarchar](50) NULL,
	[timeOrder] [nvarchar](50) NULL,
 CONSTRAINT [PK__orders__0809335D974CFC57] PRIMARY KEY CLUSTERED 
(
	[orderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[products]    Script Date: 01/07/2021 5:27:25 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[products](
	[productId] [varchar](200) NOT NULL,
	[type] [varchar](20) NULL,
	[type_detail] [varchar](20) NULL,
	[name] [varchar](100) NULL,
	[brand] [varchar](10) NULL,
	[price] [int] NULL,
	[quantity] [int] NULL,
	[url] [text] NULL,
	[screen_size] [ntext] NULL,
	[screen_tech] [ntext] NULL,
	[camera_rear] [ntext] NULL,
	[camera_front] [ntext] NULL,
	[chipset] [ntext] NULL,
	[ram] [ntext] NULL,
	[memory] [ntext] NULL,
	[pin] [ntext] NULL,
	[os] [ntext] NULL,
 CONSTRAINT [PK__products__2D10D16A7395F36C] PRIMARY KEY CLUSTERED 
(
	[productId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 01/07/2021 5:27:25 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[userId] [varchar](20) NOT NULL,
	[fullname] [nvarchar](50) NULL,
	[username] [varchar](10) NULL,
	[password] [varchar](50) NULL,
	[role] [varchar](10) NULL,
 CONSTRAINT [PK__users__CB9A1CFF19E04DBE] PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'batteryef20000', N'Battery Energizer Fabric 20.000mAh', 590000, 100, N'batteryef20000.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'batteryiwalk12000', N'Battery iWalk Uba1200p 12000mAh 6 in 1', 790000, 100, N'batteryiwalk12000.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'batteryss10000', N'Battery SamSung EB-P3300X 10.000mAh', 840000, 100, N'batteryss10000.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'batteryxiaomi10000', N'Battery Polymer 10.000mAh Xiaomi Mi 18W Fast Charge Power Bank 3', 390000, 100, N'batteryxiaomi10000.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'batteryxiaomi20000', N'Battery Xiaomi Redmi 20000mAh', 420000, 100, N'batteryxiaomi20000.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'batteryzendure10000', N'Battery Zendure 10,000 mAh 18W', 490000, 100, N'batteryzendure10000.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'cableankera8832', N'Type C to Lightning Anker Powerline 3 A8832 0.9m', 360000, 100, N'cableankera8832.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'cableaukeynylon', N'Aukey Lightning MFI 1.2M Nylon', 330000, 100, N'cableaukeynylon.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'cablemophie1m', N'Mophie Usb-C To Lightning MFI 1M', 320000, 100, N'cablemophie1m.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'casealmip12pm', N'Case Apple Leather Magsafe iPhone 12 Pro Max', 1700000, 100, N'casealmip12pm.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'caseasip11', N'Case Apple Silicone iPhone 11', 390000, 100, N'caseasip11.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'caseasip11pm', N'Case Apple Silicone iPhone 11 Pro Max', 390000, 100, N'caseasip11pm.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'caseesrmtgsgn20u', N'Case ESR Mimic Tempered Glass Samsung Galaxy Note 20 Ultra', 470000, 100, N'caseesrmtgsgn20u.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'caseesrscstpu', N'Case ESR Slim Clear Soft TPU iPhone 12 / 12 Pro', 490000, 100, N'caseesrscstpu.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'caseip12pmg4', N'Case iPhone 12 Pro Max Gear4 D3O Crystal Palace', 690000, 100, N'caseip12pmg4.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'caseip12pmrc', N'Case iPhone 12 Pro Max Raptic Clear', 340000, 100, N'caseip12pmrc.png')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'casescsgn20u', N'Case Standing Cover Samsung Galaxy Note 20 Ultra', 440000, 100, N'casescsgn20u.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'casesgs21us', N'Case Samsung Galaxy S21 Ultra Silicone with S-Pen', 1279000, 100, N'casesgs21us.png')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'caseuagpsgn20u', N'Case UAG Plasma Samsung Galaxy Note 20 Ultra', 760000, 100, N'caseuagpsgn20u.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'chargerankera2633', N'Anker Powerport III Nano 20W A2633', 360000, 100, N'chargerankera2633.png')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'chargermophie20w', N'Mophie 20w PD Type C', 320000, 100, N'chargermophie20w.jpg')
INSERT [dbo].[accessories] ([accessoryId], [name], [price], [quantity], [url]) VALUES (N'chargerxiaomiha716', N'Xiaomi Zmi Ha716 Type C 20W PD', 190000, 100, N'chargerxiaomiha716.jpg')
GO
INSERT [dbo].[news] ([newsId], [title], [detail], [url], [time]) VALUES (N'nghe-don-la-iphone-13-iphone-12s-lo-dien-thiet-ke-chinh-thuc-qua-mo-hinh-dummy-se-ra-mat-ngay-14-09-co-ban-mau-hong-va-gia-tu-16-trieu', N'Nghe Đồn Là: iPhone 13 (iPhone 12s) lộ diện thiết kế chính thức qua mô hình dummy, sẽ ra mắt ngày 14/09, có bản màu hồng và giá từ 16 triệu', N'Thông tin mới nhất về thế hệ iPhone mới của nhà táo Mỹ, một leaker nổi tiếng tên là Sonny Dickson đã bất ngờ chia sẻ loạt ảnh thiết kế của thế hệ iPhone 13 Series qua mô hình dựng dummy, xác nhận sự chính xác của những tin đồn về thiết kế của máy gần đây. Qua đó, chúng ta phần nào chiêm ngưỡng được ngoại thất của iPhone 13 (iPhone 12s) một cách rõ ràng nhất. 

Dựa trên những hình ảnh rò rỉ dưới đây cho chúng ta thấy sự khác biệt về ngoại hình giữa thế hệ iPhone 13 Series và iPhone 12 Series là không nhiều. iPhone 13 mini và iPhone 13 sẽ có bố cục camera được đặt chéo khác với dòng iPhone 12 hiện tại và không được trang bị LiDAR như tin đồn. Nếu để ý một chút các bạn có thể thấy iPhone 13 Pro và iPhone 13 Pro Max dường như có 3 cụm camera to hơn và mỏng hơn một chút so với hai thiết bị tiền nhiệm.', N'7cf7bfca-03c7-4ca7-9668-a8798a770c57.jpg', N'2021-06-24 15:21:28')
INSERT [dbo].[news] ([newsId], [title], [detail], [url], [time]) VALUES (N'ky-vong-nokia-xr20-trang-bi-cong-nghe-mang-5g-gia-re-nhat-trong-phan-khuc-co-mau-moi-bat-mat', N'Kỳ Vọng Nokia XR20: Trang bị công nghệ mạng 5G giá rẻ nhất trong phân khúc, có màu mới bắt mắt', N'HMD Global thường đánh mạnh vào phân khúc giá rẻ và tầm trung. Trong thời gian tới hãng có một cách tiếp cận mới trên những smartphone giá rẻ mang thương hiệu Nokia. Đó là sản phẩm mới sẽ tích hợp bộ vi xử lý có hỗ trợ công nghệ mạng 5G. Thông tin mới đã chia sẻ rằng, chiếc Nokia XR20 sẽ là smartphone giá rẻ, hỗ trợ mạng 5G tốc độc cao. Liệu chúng ta có thể kỳ vọng gì ở chiếc Nokia XR20, chúng ta cùng nhau xem qua bài viết bên dưới nhé!', N'5a483ec0-3933-4dfc-bb42-48055a59ebd2.jpg', N'2021-06-24 15:22:48')
INSERT [dbo].[news] ([newsId], [title], [detail], [url], [time]) VALUES (N'galaxy-m22-gia-re-voi-pin-khung-6-000-mah-man-hinh-90hz-tien-them-mot-buoc-quan-trong-truoc-khi-ra-mat', N'Galaxy M22 giá rẻ với pin khủng 6.000 mAh, màn hình 90Hz tiến thêm một bước quan trọng trước khi ra mắt', N'Samsung sẽ sớm ra mắt mẫu điện thoại tầm trung mới có tên là Galaxy M22, khi thiết bị này vừa đạt được chứng nhận quan trọng từ cơ quan Bluetooth SIG. Được biết, đây có thể là phiên bản đổi tên của Galaxy A22 đã ra mắt cách đây không lâu. 
Theo đó, dữ liệu Bluetooth SIG tiết lộ Galaxy M22 có mã là SM-M225FV_DS, được trang bị Bluetooth 5.0, hỗ trợ kết nối LTE và 2 SIM. Trong khi các thông số còn lại hay giá bán vẫn còn là ẩn số.

Còn theo những rò rỉ và báo cáo trước đó, Galaxy M22 sẽ được trang bị bộ vi xử lý MediaTek Helio G80, RAM 4 GB hoặc 6 GB, bộ nhớ trong 64 GB hoặc 128 GB. Máy có camera selfie 13 MP và 4 camera sau với camera chính lên đến 48 MP có khả năng quay video 1080p, tương tự Galaxy A22.

Ngoài ra, thiết bị sẽ được cài sẵn Android 11 ngay khi xuất xưởng (cùng với One UI 3.x), sở hữu màn hình Super AMOLED Infinity-U 6.4 inch độ phân giải HD+ với tần số quét lên tới 90 Hz, cổng USB Type-C, cổng cắm tai nghe 3.5 mm và pin lên tới 6.000 mAh.

Các bạn nghĩ như thế nào về mẫu điện thoại tầm trung sắp ra mắt của nhà Samsung?', N'11556d98-c3ea-4613-83cf-8ca6be1d9dde.jpg', N'2021-06-24 15:25:1')
INSERT [dbo].[news] ([newsId], [title], [detail], [url], [time]) VALUES (N'iphone-se-2022-se-ho-tro-ket-noi-5g-va-bo-xu-ly-manh-hon', N'iPhone SE 2022 sẽ hỗ trợ kết nối 5G và bộ xử lý mạnh hơn', N'Báo cáo mới cho biết, thế hệ iPhone SE ra mắt vào năm sau sẽ không có nhiều thay đổi so với thế hệ trước. Điều đó có nghĩa là điện thoại này sẽ có ngoại hình giống chiếc iPhone 8 với màn hình viền dày ở mặt trước và đi kèm nút Home vật lý được tích hợp cảm biến vân tay Touch ID.
Kuo cho biết thêm rằng, ‌iPhone SE‌ 2022 sẽ hỗ trợ 5G và nó sẽ có bộ xử lý mới mạnh mẽ hơn. Thiết bị này sẽ được định vị là chiếc “iPhone 5G rẻ nhất từ trước đến nay.” ‌Hiện tại, chiếc iPhone‌ có 5G giá cả phải chăng nhất hiện nay là iPhone 12 mini, vì vậy iPhone SE 2022 nhiều khả năng sẽ có giá bán rẻ hơn 699 USD khi ra mắt.

Đã có tin đồn về một “‌iPhone SE‌ Plus” với màn hình lớn hơn và Touch ID được tích hợp vào nút nguồn ở cạnh bên, nhưng Kuo đã không đề cập đến thiết bị này trong báo cáo mới nhất. Do đó, hiện vẫn chưa rõ thiết bị này đã bị hủy bỏ hay nó sẽ ra mắt sau đó.

Nhà phân tích Kuo trước đây đã từng chia sẻ rằng, Apple đang phát triển một phiên bản mới của iPhone 11 với màn hình LCD 6 inch, hỗ trợ Face ID và 5G. Rất có thể thiết bị này sẽ thuộc dòng iPhone SE 2023. Hãy cùng chờ xem nhé!', N'af290374-e0ca-45c9-b8df-f7296e48d034.jpg', N'2021-06-25 6:26:55')
GO
INSERT [dbo].[notifications] ([notiId], [title], [detail], [time]) VALUES (N'vi-sao-cuba-chi-su-dung-vaccine-covid-19-tu-san-xuat-', N'Vì sao Cuba chỉ sử dụng vaccine Covid-19 tự sản xuất?', N'Trong một bài viết đăng tải trên Đài Phát thanh Công cộng Quốc gia (NPR), tác giả Jason Beaubien mở đầu: “Cuba có một giấc mơ - giấc mơ tự sản xuất thật nhiều vaccine Covid-19 để chia sẻ cho tất cả người dân và cả bạn bè và đồng minh trên thế giới”. Không chỉ vậy, các quan chức Cuba còn mong muốn cung cấp dịch vụ tiêm chủng miễn phí cho khách du lịch khi đến sân bay ở Havana. Đó không phải là những suy nghĩ viển vông, tác giả nhận định. Ngay cả khi quốc đảo này phải đối mặt với cuộc khủng hoảng kinh tế tàn khốc, các nhà khoa học vẫn đang tìm tòi, phát triển và nghiên cứu nhiều loại vaccine khác nhau. Ngày 22/6, Cuba trở thành quốc gia Mỹ Latin đầu tiên sản xuất được loại vaccine Covid-19 nội địa. Từ tháng 5, nước này đã bắt đầu tiêm chủng cho người dân ở thủ đô Havana bằng loại vaccine này, trước khi hoàn thành thử nghiệm lâm sàng giai đoạn 3. Các nhà khoa học Cuba khi đó lập luận rằng với 145.000 người đã được tiêm trong cuộc thí nghiệm lâm sàng và một "nghiên cứu can thiệp" trên các nhân viên y tế cho thấy họ có đủ dữ liệu để nói rằng các triệu chứng sốc phản vệ nghiêm trọng sau khi tiêm vaccine này là hiếm gặp.', N'2021-06-23 9:32:15')
INSERT [dbo].[notifications] ([notiId], [title], [detail], [time]) VALUES (N'-bitcoin-dang-o-trong-con-bao-', N'"Bitcoin đang ở trong cơn bão"', N'Theo dữ liệu của Coin Desk hôm 22/6 (theo giờ Việt Nam), giá Bitcoin có thời điểm rơi xuống 28.814 USD/đồng. Như vậy, toàn bộ mức tăng giá tính từ đầu năm của đồng tiền này đã bốc hơi. Giá trị vốn hóa thị trường của đồng tiền mã hóa lớn nhất thế giới bị thu hẹp còn 543 tỷ USD.

Tuy nhiên, đến cuối ngày 22/6, giá Bitcoin đã tăng trở lại ngưỡng 32.000 USD/đồng. Vốn hóa của đồng tiền về mức hơn 600 tỷ USD. Dù vậy, giới chuyên gia nhận định áp lực từ phía chính quyền Trung Quốc vẫn sẽ đè nặng lên giá của Bitcoin và các loại tiền mã hóa khác.

Ether - đồng tiền mã hóa lớn thứ hai - có thời điểm rơi xuống mức 1.700 USD/đồng rồi bật tăng trở lại gần 2.000 USD/đồng. Tuy nhiên, giá XRP và Dogecoin vẫn chứng kiến giá giảm lần lượt 12,9% và 7,89%.', N'2021-06-23 9:40:39')
INSERT [dbo].[notifications] ([notiId], [title], [detail], [time]) VALUES (N'thanh-vien-hoi-dong-dao-duc-noi-gi-ve-viec-xin-cap-phep-nano-covax-', N'Thành viên Hội đồng đạo đức nói gì về việc xin cấp phép Nano Covax?', N'Công ty Nanogen vừa gửi đơn xin cấp phép khẩn cấp vaccine Covid-19 Nano Covax. Nếu thuận lợi, đây sẽ là vaccine Covid-19 "made in Vietnam" đầu tiên được đưa vào sử dụng. Song nhiều người lo ngại bởi vaccine được nghiên cứu trong thời gian quá ngắn, từ tháng 6/2020.
GS.TS Phạm Ngọc Đính, thành viên Hội đồng Đạo đức Quốc gia trong lĩnh vực Y - Sinh học, cho hay dựa trên quá trình ông theo dõi việc nghiên cứu và sản xuất vaccine của Công ty Nanogen, có thể nói Nano Covax đảm bảo yêu cầu về khoa học, chất lượng, cũng như khía cạnh đạo đức.
Theo vị chuyên gia này, với tư cách những nhà khoa học, Hội đồng đạo đức sẽ không cho phép bỏ qua bất cứ giai đoạn nào trong quá trình thử nghiệm vaccine. Tuy nhiên, trong tình huống cấp bách có thể xem xét việc cấp phép khẩn cấp dựa theo đánh giá của WHO, Bộ Y tế, yêu cầu của Thủ tướng Chính phủ...', N'2021-06-24 15:43:41')
INSERT [dbo].[notifications] ([notiId], [title], [detail], [time]) VALUES (N'tp-hcm-phat-hien-them-10-benh-nhan-covid-19-chua-ro-nguon-lay', N'TP.HCM phát hiện thêm 10 bệnh nhân Covid-19 chưa rõ nguồn lây', N'Trong sáng 23/6, TP.HCM cũng ghi nhận 41 bệnh nhân là F1 tiếp xúc các ca mắc Covid-19 đã công bố.
Theo thông tin từ Trung tâm Kiểm soát Bệnh tật TP.HCM (HCDC), từ 18h ngày 22/6 đến 6h ngày 23/6, TP.HCM có thêm 51 trường hợp mắc Covid-19 với mã số 13732 - 13782.

10 trường hợp chưa rõ nguồn lây được phát hiện trong quá trình xét nghiệm sàng lọc tại bệnh viện. Họ cư trú tại các khu vực: Quận 4 (1), quận 8 (4), quận 10 (4), TP Thủ Đức KV 2 (1).

Bên cạnh đó, 41 trường hợp tiếp xúc với các bệnh nhân Covid-19 trước đó cũng được phát hiện trong khoảng thời gian này.', N'2021-06-23 9:28:57')
GO
INSERT [dbo].[orderDetails] ([orderId], [productId], [name], [price], [quantity]) VALUES (N'20210621212337', N'batteryss10000', N'Battery SamSung EB-P3300X 10.000mAh', 840000, 1)
INSERT [dbo].[orderDetails] ([orderId], [productId], [name], [price], [quantity]) VALUES (N'20210621212337', N'caseesrmtgsgn20u', N'Case ESR Mimic Tempered Glass Samsung Galaxy Note 20 Ultra', 470000, 1)
INSERT [dbo].[orderDetails] ([orderId], [productId], [name], [price], [quantity]) VALUES (N'20210621212640', N'ip11', N' iPhone 11 ', 17090000, 1)
INSERT [dbo].[orderDetails] ([orderId], [productId], [name], [price], [quantity]) VALUES (N'20210621212640', N'or4p', N'Oppo Reno4 Pro', 11090000, 1)
INSERT [dbo].[orderDetails] ([orderId], [productId], [name], [price], [quantity]) VALUES (N'20210626185528', N'caseip12pmg4', N'Case iPhone 12 Pro Max Gear4 D3O Crystal Palace', 690000, 1)
INSERT [dbo].[orderDetails] ([orderId], [productId], [name], [price], [quantity]) VALUES (N'20210626185528', N'or4p', N'Oppo Reno4 Pro', 11090000, 1)
INSERT [dbo].[orderDetails] ([orderId], [productId], [name], [price], [quantity]) VALUES (N'20210701132055', N'ip11', N' iPhone 11 ', 17090000, 3)
INSERT [dbo].[orderDetails] ([orderId], [productId], [name], [price], [quantity]) VALUES (N'20210701132055', N'ip11pm', N' iPhone 11 Pro Max ', 29090000, 3)
INSERT [dbo].[orderDetails] ([orderId], [productId], [name], [price], [quantity]) VALUES (N'20210701132155', N'ip11', N' iPhone 11 ', 17090000, 1)
INSERT [dbo].[orderDetails] ([orderId], [productId], [name], [price], [quantity]) VALUES (N'20210701132610', N'ip11', N' iPhone 11 ', 17090000, 2)
GO
INSERT [dbo].[orders] ([orderId], [fullname], [phone], [address], [country], [state], [zipcode], [paymentMethod], [totalPrice], [status], [timeOrder]) VALUES (N'20210621212337', N'Huynh Thien Phu', N'0379559458', N'653 Nguyen Kiem', N'Viet Nam', N'Da Nang', N'70000', N'COD', 1310000, N' Shipping ', N'2021-06-21 21:23:37')
INSERT [dbo].[orders] ([orderId], [fullname], [phone], [address], [country], [state], [zipcode], [paymentMethod], [totalPrice], [status], [timeOrder]) VALUES (N'20210621212640', N'Lam Quy An', N'0989999999', N'434 Le Binh', N'Viet Nam', N'Hai Phong', N'60000', N'ATM', 28180000, N'Pending', N'2021-06-21 21:26:40')
INSERT [dbo].[orders] ([orderId], [fullname], [phone], [address], [country], [state], [zipcode], [paymentMethod], [totalPrice], [status], [timeOrder]) VALUES (N'20210626185528', N'Huynh Thien Phu', N'0379559458', N'653 Nguyen Kiem', N'Viet Nam', N'Ho Chi Minh', N'70000', N'CREADIT', 11780000, N'Pending', N'2021-06-26 18:55:28')
INSERT [dbo].[orders] ([orderId], [fullname], [phone], [address], [country], [state], [zipcode], [paymentMethod], [totalPrice], [status], [timeOrder]) VALUES (N'20210701132055', N'Huỳnh Thiên Phú', N'0989999999', N'123 Nguyễn Kiệm', N'Việt Nam', N'Hồ Chí Minh', N'70000', N'COD', 138540000, N'Pending', N'2021-07-01 13:20:55')
INSERT [dbo].[orders] ([orderId], [fullname], [phone], [address], [country], [state], [zipcode], [paymentMethod], [totalPrice], [status], [timeOrder]) VALUES (N'20210701132155', N'Huynh Thien Phu', N'0989999999', N'123 Hai Ba Trung', N'Việt Nam', N'undefined', N'60000', N'COD', 17090000, N'Pending', N'2021-07-01 13:21:55')
INSERT [dbo].[orders] ([orderId], [fullname], [phone], [address], [country], [state], [zipcode], [paymentMethod], [totalPrice], [status], [timeOrder]) VALUES (N'20210701132610', N'Huỳnh Thiên Phu', N'0379559458', N'123 Hai Ba Trưng', N'Việt Nam', N'Hồ Chí Minh', N'70000', N'COD', 34180000, N'Pending', N'2021-07-01 13:26:10')
GO
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'batteryef20000', N'accessory', N'battery', N'Battery Energizer Fabric 20.000mAh', NULL, 380000, 100, N'batteryef20000.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'batteryiwalk12000', N'accessory', N'battery', N'Battery iWalk Uba1200p 12000mAh 6 in 1', NULL, 790000, 100, N'batteryiwalk12000.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'batteryss10000', N'accessory', N'battery', N'Battery SamSung EB-P3300X 10.000mAh', NULL, 840000, 99, N'batteryss10000.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'batteryxiaomi10000', N'accessory', N'battery', N'Battery Polymer 10.000mAh Xiaomi Mi 18W Fast Charge Power Bank 3', NULL, 390000, 100, N'batteryxiaomi10000.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'batteryxiaomi20000', N'accessory', N'battery', N'Battery Xiaomi Redmi 20000mAh', NULL, 420000, 99, N'batteryxiaomi20000.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'batteryzendure10000', N'accessory', N'battery', N'Battery Zendure 10,000 mAh 18W', NULL, 490000, 100, N'batteryzendure10000.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'cableankera8832', N'accessory', N'charger_cable', N'Type C to Lightning Anker Powerline 3 A8832 0.9m', NULL, 360000, 100, N'cableankera8832.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'cableaukeynylon', N'accessory', N'charger_cable', N'Aukey Lightning MFI 1.2M Nylon', NULL, 330000, 100, N'cableaukeynylon.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'cablemophie1m', N'accessory', N'charger_cable', N'Mophie Usb-C To Lightning MFI 1M', NULL, 320000, 99, N'cablemophie1m.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'casealmip12pm', N'accessory', N'case', N'Case Apple Leather Magsafe iPhone 12 Pro Max', NULL, 1700000, 99, N'casealmip12pm.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'caseasip11pm', N'accessory', N'case', N'Case Apple Silicone iPhone 11 Pro Max', NULL, 390000, 100, N'caseasip11pm.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'caseesrmtgsgn20u', N'accessory', N'case', N'Case ESR Mimic Tempered Glass Samsung Galaxy Note 20 Ultra', NULL, 470000, 99, N'caseesrmtgsgn20u.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'caseesrscstpu', N'accessory', N'case', N'Case ESR Slim Clear Soft TPU iPhone 12 / 12 Pro', NULL, 490000, 99, N'caseesrscstpu.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'caseip12pmg4', N'accessory', N'case', N'Case iPhone 12 Pro Max Gear4 D3O Crystal Palace', NULL, 690000, 99, N'caseip12pmg4.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'caseip12pmrc', N'accessory', N'case', N'Case iPhone 12 Pro Max Raptic Clear', NULL, 340000, 100, N'caseip12pmrc.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'casescsgn20u', N'accessory', N'case', N'Case Standing Cover Samsung Galaxy Note 20 Ultra', NULL, 440000, 100, N'casescsgn20u.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'casesgs21us', N'accessory', N'case', N'Case Samsung Galaxy S21 Ultra Silicone with S-Pen', NULL, 1279000, 100, N'casesgs21us.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'caseuagpsgn20u', N'accessory', N'case', N'Case UAG Plasma Samsung Galaxy Note 20 Ultra', NULL, 760000, 100, N'caseuagpsgn20u.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'chargerankera2633', N'accessory', N'charger_cable', N'Anker Powerport III Nano 20W A2633', NULL, 360000, 100, N'chargerankera2633.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'chargermophie20w', N'accessory', N'charger_cable', N' Mophie 20w PD Type C ', NULL, 320000, 100, N'chargermophie20w.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'chargerxiaomiha716', N'accessory', N'charger_cable', N'Xiaomi Zmi Ha716 Type C 20W PD', NULL, 190000, 100, N'chargerxiaomiha716.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'ip11', N'phone', N'phone', N' iPhone 11 ', N'Apple', 17090000, 92, N'ip11.jpg', N'6.1 inches', N'IPS LCD', N'Camera kép 12MP:
- Camera góc rộng: ƒ/1.8 aperture
- Camera siêu rộng: ƒ/2.4 aperture', N'12 MP, ƒ/2.2 aperture', N'A13 Bionic', N'4 GB', N'64 GB', N'3110 mAh', N'iOS 13 hoặc cao hơn (Tùy vào phiên bản phát hành)')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'ip11pm', N'phone', N'phone', N' iPhone 11 Pro Max ', N'Apple', 29090000, 90, N'ip11pm.jpg', N' 6.5 inches ', N'OLED', N'3 Camera 12MP:
- Camera tele: ƒ/2.0 aperture
- Camera góc rộng: ƒ/1.8 aperture
- Camera siêu rộng: ƒ/2.4 aperture', N'12 MP ƒ/2.2 aperture', N'A13 Bionic', N'4 GB', N'64 GB', N'3969 mAh', N'iOS 13 hoặc cao hơn (Tùy vào phiên bản phát hành)')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'ip12', N'phone', N'phone', N'iPhone 12', N'Apple', 19990000, 87, N'ip12.jpg', N'6.1 inches', N'OLED', N'12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS
12 MP, f/2.4, 120°, 13mm (ultrawide), 1/3.6"', N'12 MP, f/2.2, 23mm (wide), 1/3.6"
SL 3D, (depth/biometrics sensor)', N'Apple A14 Bionic (5 nm)', N'4 GB', N'64 GB', N'Li-Ion, sạc nhanh 20W, sạc không dây 15W, USB Power Delivery 2.0', N'	iOS 14.1 hoặc cao hơn (Tùy vào phiên bản phát hành)')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'ip12m', N'phone', N'phone', N' iPhone 12 Mini ', N'Apple', 17090000, 100, N'ip12m.jpg', N'5.4 inches ', N'OLED ', N'12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.4, 120°, 13mm (ultrawide), 1/3.6', N'12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.4, 120°, 13mm (ultrawide), 1/3.6', N'Apple A14 Bionic (5 nm)', N'4 GB ', N'64 GB', N'Li-Ion, sạc nhanh 20W, sạc không dây 15W, USB Power Delivery 2.0', N'iOS 14.1 hoặc cao hơn (Tùy vào phiên bản phát hành)')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'ip12p', N'phone', N'phone', N' iPhone 12 Pro ', N'Apple', 28090000, 100, N'ip12p.jpg', N'6.1 inches', N'OLED', N'12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS
12 MP, f/2.0, 52mm (telephoto), 1/3.4", 1.0µm, PDAF, OIS, 2x optical zoom
12 MP, f/2.4, 120°, 13mm (ultrawide), 1/3.6"
TOF 3D LiDAR scanner (depth)', N'12 MP, f/2.2, 23mm (wide), 1/3.6"
SL 3D, (depth/biometrics sensor)', N'Apple A14 Bionic (5 nm)', N'6 GB', N'128 GB', N'Li-Ion, sạc nhanh 20W, sạc không dây 15W, USB Power Delivery 2.0', N'	iOS 14.1 hoặc cao hơn (Tùy vào phiên bản phát hành)')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'ip12pm', N'phone', N'phone', N'iPhone 12 Pro Max', N'Apple', 29590000, 100, N'ip12pm.jpg', N'6.7 inches', N'OLED', N'	12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS
12 MP, f/2.0, 52mm (telephoto), 1/3.4", 1.0µm, PDAF, OIS, 2x optical zoom
12 MP, f/2.4, 120°, 13mm (ultrawide), 1/3.6"
TOF 3D LiDAR scanner (depth)', N'12 MP, f/2.2, 23mm (wide), 1/3.6"
SL 3D, (depth/biometrics sensor)', N'Apple A14 Bionic (5 nm)', N'6 GB', N'128 GB', N'Li-Ion, sạc nhanh 20W, sạc không dây 15W, USB Power Delivery 2.0', N'	iOS 14.1 hoặc cao hơn (Tùy vào phiên bản phát hành)')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'iphone-xr-64gb', N'phone', N'phone', N'iPhone XR 64GB', N'Apple', 14990000, 123, N'0ec702f0-de5e-48e4-ad59-5dc99b80bf82.jpg', N'6.1 inches', N'IPS LCD', N'12MP', N'7MP', N'Apple A12 Bionic', N'3 GB', N'64 GB', N'2942mAh', N'iOS 14')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'ipse2020', N'phone', N'phone', N'iPhone SE 2020', N'Apple', 12990000, 100, N'ipse2020.jpg', N'4.7 inches', N'IPS LCD', N'12 MP, f/1.8 (wide), PDAF, OIS', N'7 MP, f/2.2', N'Apple A13 Bionic (7 nm+)', N'3 GB', N'64 GB', N'Li-Ion 1821 mAh battery (6.96 Wh), Fast charging 18W, 50% in 30 min', N'iOS 13')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'oa53', N'phone', N'phone', N'Oppo A53', N'Oppo', 5090000, 100, N'oa53.jpg', N'6.5 inches', N'IPS LCD', N'	13 MP, f/2.2, 25mm (wide), 1/3.06", 1.12µm, PDAF
2 MP, f/2.4, (macro)
2 MP, f/2.4, (depth)', N'16 MP, f/2.0, (wide), 1/3.06", 1.0µm', N'	Qualcomm SM4250 Snapdragon 460 (11 nm)', N'4 GB', N'128 GB', N'Li-Po 5000 mAh, sạc nhanh 18W', N'Android 10, ColorOS 7.2')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'oa92', N'phone', N'phone', N'Oppo A92', N'Oppo', 7290000, 100, N'oa92.png', N'6.5 inches', N'TFT LCD', N'	Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP', N'16 MP', N'	Snapdragon 665', N'8 GB', N'128 GB', N'5000 mAh, 18 W', N'Android 10')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'or4p', N'phone', N'phone', N'Oppo Reno4 Pro', N'Oppo', 11090000, 96, N'or4p.jpg', N'6.5 inches', N'Super AMOLED', N'48 MP (IMX586) + 8 MP + 2 MP + 2 MP, 4 camera', N'32 MP (IMX616),F/2.4', N'Qualcomm SM7125 Snapdragon 720G (8 nm)', N'8 GB', N'256 GB', N'Li-Po 4000 mAh battery, Fast charging 30W, 60% in 15 min, 100% in 36 min (advertised), SuperVOOC 2.0', N'ColorOS 7.2, nền tảng Android 10')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'or5', N'phone', N'phone', N'Oppo Reno5', N'Oppo', 8290000, 100, N'or5.jpg', N'6.43 inches', N'AMOLED', N'64 MP + 8 MP + 2 MP + 2 MP', N'44 MP, F/2.4, Cảm biến thông minh AI', N'Qualcomm Snapdragon 720G, tối đa 2.3GHz', N'8 GB', N'128 GB', N'4310mAh (Typ), Sạc siêu nhanh', N'ColorOS 11.1, Nền tảng Android 11')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'rm7p', N'phone', N'phone', N'Realme 7 Pro', N'Realme', 8490000, 100, N'rm7p.jpg', N'6.44 inches', N'Super AMOLED', N'Camera chính: 64MP + f/1.8 Sony IMX682
Camera góc rộng: 8MP + f/2.3
Camera siêu cận: 2MP + f/2.4
Camera chân dung: 2MP + f/2.4', N'Sony 32MP + f/2.5', N'Qualcomm® Snapdragon™ 720G', N'8 GB', N'128 GB', N'4500 mAh, SuperDart Hỗ trợ sạc 65W', N'Realme UI 1.0 - Android 10')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'rm8p', N'phone', N'phone', N'Realme 8 Pro', N'Realme', 8069000, 100, N'rm8p.png', N'6.4 inches', N'Super AMOLED', N'Camera chính: 108 MP, f/1.9, 26mm, 1/1.52", 0.7µm, PDAF
Camera góc siêu rộng: 8 MP, f/2.3, 119˚, 16mm , 1/4.0", 1.12µm
Camera cận cảnh: 2 MP, f/2.4
Camera xóa phông: 2 MP, f/2.4', N'16 MP, f/2.5, 1/3.0", 1.0µm', N'Snapdragon 720G (8 nm)', N'8 GB', N'128 GB', N'Li-Po 4500 mAh', N'Android 11, Realme UI 2.0')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'rmc20', N'phone', N'phone', N'Realme C20', N'Realme', 2490000, 100, N'rmc20.jpg', N'6.5 inches', N'IPS LCD', N'Camera chính: 8MP + f/2.0', N'5MP + f/2.2', N'Helio G35', N'2 GB', N'32 GB', N'5000mAh', N'Android 10')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'rmc25', N'phone', N'phone', N'Realme C25', N'Realme', 4790000, 100, N'rmc25.jpg', N'6.5 inches', N'IPS LCD', N'	Camera chính: 48MP + f/1.8
Camera chân dung đen trắng: 2MP + f/2.4
Camera chụp siêu cận: 2MP + f/2.4', N'8MP + f/2.0', N'MediaTek G70', N'4 GB', N'128 GB', N'6000mAh', N'Android 11')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'ssga72', N'phone', N'phone', N'Samsung Galaxy A72', N'Samsung', 11000000, 98, N'ssga72.jpg', N'6.7 inches', N'Super AMOLED', N'Camera góc rộng: 64 MP, f/1.8, 26mm (wide), PDAF, OIS
Camera tele: 8 MP, f/2.4, (telephoto), PDAF, OIS, Zoom quang 3X
Camera góc siêu rộng: 12 MP, f/2.2, 123˚
Camere macro: 5 MP, f/2.4', N'32 MP, f/2.2, 26mm (wide), 1/2.8", 0.8µm', N'Snapdragon 720G (8 nm)', N'8 GB', N'256 GB', N'Li-Ion 5000 mAh', N'Android 11, One UI 3.0')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'ssgn20', N'phone', N'phone', N'Samsung Galaxy Note 20', N'Samsung', 19090000, 100, N'ssgn20.jpg', N'6.7 inches', N'Dynamic AMOLED', N'12 MP, f/1.8, 26mm (wide), 1/1.76", 1.8µm, Dual Pixel PDAF, OIS
64 MP, f/2.0, (telephoto), 1/1.72", 0.8µm, PDAF, OIS, 3x hybrid optical zoom
12 MP, f/2.2, 120˚, 13mm (ultrawide), 1/2.55", 1.4µm', N'10 MP, f/2.2, 26mm (wide), 1/3.2", 1.22µm, Dual Pixel PDAF', N'Exynos 990 (7 nm+)', N'8 GB', N'256 GB', N'Non-removable Li-Ion 4300 mAh battery
Fast charging 25W
USB Power Delivery 3.0
Fast Qi/PMA wireless charging
Reverse wireless charging 9W', N'Android 10, One UI 2.5')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'ssgn20u', N'phone', N'phone', N'Samsung Galaxy Note 20 Ultra', N'Samsung', 27900000, 99, N'ssgn20u.jpg', N'6.9 inches', N'Dynamic AMOLED', N'- Cảm biến chính góc rộng 108 MP, f/1.8, lấy nét theo pha kép PDAF, chống rung OIS
- Ống kính tiềm vọng 12 MP, f/3.0, PDAF, OIS, zoom quang 5x, zoom lai 50x
- Cảm biến góc rộng 12 MP, f/2.2', N'Ống kính góc rộng 10 MP, f/2.2, Dual Pixel PDAF', N'Exynos 990 (7 nm+)', N'8 GB', N'256 GB', N'- Li-Ion 4,500 mAh
-Sạc nhanh có dây 25W, hỗ trợ chuẩn PD 3.0
- Sạc nhanh không dây
- Sạc ngược không dây 9W', N'Android 10, One UI 2.1')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'ssgs21u', N'phone', N'phone', N'Samsung Galaxy S21 Ultra', N'Samsung', 24000000, 100, N'ssgs21u.jpg', N'6.8 inches', N'Dynamic AMOLED', N'Ống kính chính góc rộng: 108MP, f/1.8
Ống kính zoom tiềm vọng: 10MP, zoom quang 10x
Cảm biến tele: 10MP, zoom quang 3x
Cảm biến siêu rộng: 12MP, f/2.2
Cảm biến Laser AF', N'40 MP, f/2.2', N'Exynos 2100 8 nhân', N'12 GB', N'128 GB', N'Dung lượng pin 5,000mAh
Sạc nhanh có dây 25W
Sạc nhanh không dây 15W
Sạc ngược không dây 4.5W', N'Android 11, One UI 3.0')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'ssgzf2', N'phone', N'phone', N'Samsung Galaxy Z Fold 2', N'Samsung', 47000000, 100, N'ssgzf2.jpg', N'Chính: 7.6 inches & Phụ: 6.23 inches', N'Dynamic AMOLED', N'Camera chính: 12 MP, f/1.8, 26mm (wide), 1/1.76", 1.8µm, Dual Pixel PDAF, OIS
Camera ra tele: 12 MP, f/2.4, 52mm (telephoto), 1/3.6", 1.0µm, PDAF, OIS, 2x optical zoom
Camera góc siêu rộng: 12 MP, f/2.2, 123˚, 12mm (ultrawide), 1.12µm', N'Camera chính: 10 MP, f/2.2, 26mm (wide), 1.22µm
Camera phụ: 10 MP, f/2.2, 26mm (wide), 1.22µm', N'Qualcomm SM8250 Snapdragon 865+ (7 nm+)', N'12 GB', N'256 GB', N'Li-Po 4500 mAh
Sạc nhanh 25W
Sạc nhanh không dây 11W
Sạc ngược 5.4W', N'Android 10, One UI 2.5')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'va3', N'phone', N'phone', N'Vsmart Active 3', N'Vsmart', 3600000, 99, N'va3.png', N'6.39 inches', N'AMOLED', N'Camera chính 48MP
Camera góc rộng 8MP
Camera đo chiều sâu 2MP', N'16MP', N'Mediatek Helio P60', N'6 GB', N'64 GB', N'4020mAh', N'VOS 2.5')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'vap', N'phone', N'phone', N'Vsmart Aris Pro', N'Vsmart', 6690000, 100, N'vap.png', N'6.7 inches', N'Super AMOLED', N'	64MP + 8MP + 8MP + 2MP', N'Camera ẩn dưới màn hình 20MP, công nghệ xử lý hình ảnh AI VCam Kristal', N'Qualcomm SDM730 Snapdragon 730 (8 nm)', N'8 GB', N'128 GB', N'4,000mAh, hỗ trợ sạc nhanh Quick Charge 3.0 18W', N'Android 10, VOS 3.0')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'vl4', N'phone', N'phone', N'Vsmart Live 4', N'Vsmart', 4100000, 99, N'vl4.jpg', N'6.5 inches', N'Super AMOLED', N'Camera chính 48MP
Camera góc siêu rộng 8MP
Camera xóa phông 5MP
Camera macro 2MP', N'13MP, quay phim 4K 30FPS', N'Snapdragon 675 8 nhân', N'6 GB', N'64 GB', N'Li-Po 5000 mAh mAh battery, sạc nhanh 18W', N'Android 10, VOS 3.0')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'vs5', N'phone', N'phone', N'Vsmart Star 5', N'Vsmart', 2390000, 100, N'vs5.jpg', N'6.53 inches', N'IPS LCD', N'Camera chính 13 MP
Camera xoá phông 2 MP
Camera macro 2 MP', N'8 MP', N'MediaTek Helio G35, tối đa 2.5 GHz', N'3 GB', N'32 GB', N'Li-Po 5000 mAh', N'VOS 4.0, nền tảng Android 11')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'xmm10t5g', N'phone', N'phone', N'Xiaomi Mi 10T Pro 5G', N'Xiaomi', 12490000, 100, N'xmm10t5g.jpg', N'6.67 inches', N'IPS LCD', N'108 MP, f/1.7, 26mm (wide), 1/1.33", 0.8µm, PDAF, OIS
13 MP, f/2.4, 123˚ (ultrawide), 1.12µm
5 MP, f/2.4, (macro), AF', N'20 MP, f/2.2, 27mm (wide), 1/3.4", 0.8µm', N'Qualcomm SM8250 Snapdragon 865 (7 nm+)', N'8 GB', N'256 GB', N'Li-Po 5000 mAh', N'Android 10, MIUI 12')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'xmm115g', N'phone', N'phone', N'Xiaomi Mi 11 5G', N'Xiaomi', 19990000, 100, N'xmm115g.jpg', N'6.81 inches', N'AMOLED', N'Camera góc rộng: 108 MP, f/1.9, 26mm 1/1.33", 0.8µm, PDAF, OIS
Camera góc siêu rộng: 13 MP, f/2.4, 123˚ 1/3.06", 1.12µm
Camera cận cảnh: 5 MP, f/2.4, 1/5.0", 1.12µm', N'20 MP, 27mm (wide), 1/3.4", 0.8µm', N'Qualcomm SM8350 Snapdragon 888 (5 nm)', N'8 GB', N'256 GB', N'Li-Po 4600 mAh', N'Android 11, MIUI 12.5')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'xmm11l4g', N'phone', N'phone', N'Xiaomi Mi 11 Lite 4G', N'Xiaomi', 6990000, 100, N'xmm11l4g.png', N'6.55 inches', N'AMOLED', N'Camera chính: 64 MP, f/1.8
Camera góc rộng: 8 MP, f/2.2, 119˚
Camera cận cảnh: 5 MP, f/2.4', N'16 MP, f/2.5', N'Snapdragon 732 (8 nm)', N'8 GB', N'128 GB', N'Li-Po 4250 mAh', N'Android 11, MIUI 12')
INSERT [dbo].[products] ([productId], [type], [type_detail], [name], [brand], [price], [quantity], [url], [screen_size], [screen_tech], [camera_rear], [camera_front], [chipset], [ram], [memory], [pin], [os]) VALUES (N'xmrmn10', N'phone', N'phone', N'Xiaomi Redmi Note 10', N'Xiaomi', 5090000, 100, N'xmrmn10.jpg', N'6.43 inches', N'Super AMOLED', N'Camera góc rộng: 48 MP, f/1.8, 26mm, 1/2.0", 0.8µm, PDAF
Camera góc siêu rộng: 8 MP, f/2.2, 118˚, 1/4.0", 1.12µm
Camera macro: 2 MP, f/2.4
Cảm biến chiều sâu: 2 MP, f/2.4', N'13 MP, f/2.5, 1/3.06", 1.12µm', N'Snapdragon 678 (11 nm)', N'6 GB', N'128 GB', N'Li-Po 5000 mAh', N'Android 11, MIUI 12')
GO
INSERT [dbo].[users] ([userId], [fullname], [username], [password], [role]) VALUES (N'xmobileadmin1', N'Huỳnh Thiên Phú 1', N'admin1', N'e00cf25ad42683b3df678c61f42c6bda', N'admin')
INSERT [dbo].[users] ([userId], [fullname], [username], [password], [role]) VALUES (N'xmobileadmin2', N'Huỳnh Thiên Phú 2', N'admin2', N'c84258e9c39059a89ab77d846ddab909', N'product')
INSERT [dbo].[users] ([userId], [fullname], [username], [password], [role]) VALUES (N'xmobileadmin3', N'Huỳnh Thiên Phú 3', N'admin3', N'32cacb2f994f6b42183a1300d9a3e8d6', N'order')
INSERT [dbo].[users] ([userId], [fullname], [username], [password], [role]) VALUES (N'xmobileadmin4', N'Huỳnh Thiên Phú 4', N'admin4', N'fc1ebc848e31e0a68e868432225e3c82', N'news')
GO
