import yagmail
yag = yagmail.SMTP("sys.m.schedule@gmail.com", "nohqoytnxxripbfi")
yag.send("nevoilion@gmail.com", "subject", "message")