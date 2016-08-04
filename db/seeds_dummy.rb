require File.expand_path(File.dirname(__FILE__) + '/../test/blueprints')
require 'faker'

1.upto(50) do
  TestRecords.make!(Gif, {
    url: "http://tclhost.com/pVoHHW4.gif",
    title: "When I receive yet another $digest error in angular",
  })

  TestRecords.make!(Gif, {
    url: "http://tclhost.com/EoLw9YT.gif",
    title: "When I’ve been trying to solve a bug for hours and find out a semicolon after a if()",
  })

  TestRecords.make!(Gif, {
    url: "When the sales guy proposes a weekend deployment while the client never asked for it",
    title: "http://tclhost.com/ro253el.gif",
  })

  TestRecords.make!(Gif, {
    url: "http://tclhost.com/4LcvjYk.gif",
    title: "When we talk user interface between developers",
  })


  TestRecords.make!(Gif, {
    url: "http://tclhost.com/lFH55nJ.gif",
    title: "Typical development lifecycle",
  })

  TestRecords.make!(Gif, {
    url: "http://tclhost.com/qTMqToo.gif",
    title: "When the client asks if his app will be compatible with Windows Vista",
  })

  TestRecords.make!(Gif, {
    url: "http://tclhost.com/BvY6ACz.gif",
    title: "When they tell me that I will work with the new intern",
  })

  TestRecords.make!(Gif, {
    url: "http://tclhost.com/nnptHEQ.gif",
    title: "How our Skype meetings sometimes look like",
  })

  TestRecords.make!(Gif, {
    url: "http://tclhost.com/ABP9xdM.gif",
    title: "When the team takes a look at the intern’s code",
  })

  TestRecords.make!(Gif, {
    url: "https://i.imgur.com/YG7Pp7t.gif",
    title: "Continuous delivery",
  })

  TestRecords.make!(Gif, {
    url: "http://tclhost.com/OXgfQkV.gif",
    title: "Senior developer investigating my code for a bug",
  })

  TestRecords.make!(Gif, {
    url: "http://tclhost.com/696CRKj.gif",
    title: "How it sometimes feels to use “parse”",
  })
end
