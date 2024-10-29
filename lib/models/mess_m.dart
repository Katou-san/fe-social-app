class MessageModel {
  String messId;
  int type;
  String content;
  String replyId;
  String userName;
  String userId;

  MessageModel(
      {this.messId = '',
      this.type = 0,
      this.content = '',
      this.replyId = '',
      this.userName = '',
      this.userId = ''});
}
