
function addEmergencySection(directory = ""){

	$("li").hover(function() {
	
		$(".mission_sub").hide(50);
		$(this).find(".mission_sub").show(200);
	
	
	});
	
	

	
	var references = {
						num1: { desc:  `In a 2013 study that included 12,000
													abstracts from peer-reviewed papers,
													97% agreed that global warming is
													happening and is human-caused. Cook,
													John, et al. "Quantifying the consensus
													on anthropogenic global warming in the
													scientific literature." (IOP Science, 30 Oct.
													2013)`,
								link: `http://iopscience.iop.org/article/10.1088/1748-9326/8/2/024024` },
								
								
								
						num2: { desc:  `"Temperature rise to date has already
										resulted in profound alterations to human
										and natural systems, including increases
										in droughts, floods, and some other types
										of extreme weather; sea level rise; and
										biodiversity loss - these changes are
										causing unprecedented risks to
										vulnerable persons and populations" - 2018
										IPCC special report (SR15)`,
								link: `https://www.ipcc.ch/sr15/` },
								
								
								
						num3: { desc:  `"Non-linear changes are of central
									importance to understanding climate
									change, as they suggest both that
									impacts will be far more rapid and severe
									than predictions based on linear
									projections and that the changes no
									longer correlate with the rate of
									anthropogenic carbon emissions. In other
									words - 'runaway climate change.'" - Jem
Bendall 'Deep Adaptation' 6.`
								},
								
								
								
						num4: { desc:  `Leading researchers describe this
								pathway as a 'Hothouse Earth', where
								warming continues to increase even as
								human emissions are reduced. Steffen,
								Rockstr&ouml;m, Richardson et al. Trajectories
								of the Earth System in the Anthropocene
								(PNAS, 2018)`,
								link: `https://www.pnas.org/content/115/33/8252` },



						num5: { desc:  ``,
								link: `https://www.un.org/sg/en/content/sg/statement/2018-09-10/secretary-generals-remarks-climate-change-delivered`
						 },
						 
						 
						 num6: { desc:  `Rockstrom, as quoted in the Guardian`,
								link: `https://www.theguardian.com/environment/2018/oct/08/global-warming-must-not-exceed-15c-warns-landmark-un-report`
						 },
						 
						 
						 num7: { desc:  `For example, Greenland's ice is
melting at a rate four times faster than
that predicted by scientists, with this
non-linear response predicted to have
significant implications for, amongst other
things, sea level rise.`,
								link: `https://www.pnas.org/content/early/2019/01/14/1806562116`
						 },
						 
						 
						  num8: { desc:  ``,
								link: `http://necsi.edu/research/social/pp/climate%20letter.pdf`
						 },
						 
						 
						 num9: { desc:  `Despite pledging to keep warming
below 2 degrees, research reveals that
the Intended Nationally Determined
Contributions (INDCs) that followed the
Paris Agreement leave us on track to hit
3.5 degrees of warming, just 1 degree
below business as usual, and far in
excess of the levels of warming described
as dangerous.`,
								link: `https://www.climateinteractive.org/programs/scoreboard/`
						 },
						 
						 
						 
						 num10: { desc:  ``,
								link: `https://www.nature.com/articles/nature18307`
						 },
						 
						 
						num11: { desc:  ``,
								link: `https://theconversation.com/costly-signals-needed-to-deliverinconvenient-truth-82380`
						 }
								
								
								
	
	
					};
	
	
	var mission_statements = [
								{ summary: `There is a global scientific consensus that human activity is creating risk of an unprecedented crisis on earth`, 
								
										crisis: `The alarm has sounded. After decades of climate
										research, the evidence is unequivocal: human
										activity is changing our climate, leading us towards an
										unpredictable, volatile future<cite val="num1"></cite>. Extreme weather
										events such as flooding, drought, and wildfires pose
										unprecedented risks to human prosperity - not in the
										future, but now and with increasing severity<cite val="num2"></cite>. The case
										for action is clear. `
								},
													
								{ summary: `We may already be at (or near) the point of no return for catastrophic global disaster`, 
								
										crisis: `While responses to date have largely focused on future
										change, reflecting an assumption that increased carbon
										output produces a linear 'warming', more recent
										research reveals a more complex, non-linear picture <cite val="num3"></cite>.
										While the nature of our climate system makes exact
										predictions impossible, the trend (and risk) is
										undeniable. Put simply, the more we continue to emit
										now, the more catastrophic our future becomes. While
										scientists debate the exact level, the non-linear nature
										of the Earth's climatic system means that there is point
										at which our warming will trigger 'feedback' loops within
										the Earth system, locking us into unavoidable,
										disastrous change <cite val="num4"></cite>.`,

								},	


								{ summary: `The UN Secretary General describes this as "a direct existential threat" for all humankind`, 
								
										crisis: `As the latest report from the Intergovernmental Panel
on Climate Change (IPCC) explains, there is a huge
difference between an average increase of 1.5 degrees
and 2 degrees - the limit agreed to by governments
under the 2015 Paris Agreement - with the latter
suggested by some scientists as sufficient to 'tip' the
climate into an irreversible cycle of warming. The UN
Secretary General describes this as "a direct existential
threat", noting that "If we do not change course by
2020, we risk missing the point where we can avoid
runaway climate change, with disastrous consequences
for people and all the natural systems that sustain
us."<cite val="num5"></cite>`,

								},




								{ summary: `While governments have pledged to reduce emissions to 2&deg;C, "There is a growing recognition that 2&deg;C is dangerous"`, 
								
										crisis: `According to the IPCC, allowing warming to increase to
2&deg;C instead of 1.5 puts hundreds of millions more
at risk of death, resulting in close to the entire loss of
the world's coral reefs, annual heat waves and wildfires,
flooding, drought and all the associated food insecurity
(and political instability) that this ties to. In the words of
one leading scientist, "There is a growing recognition
that 2&deg;C is dangerous."<cite val="num6"></cite>`,

								},



								{ summary: `Despite variability in predictions, the global, irreversible nature of climate change makes this risk unacceptable`, 
								
										crisis: `Climate models are constantly being updated, however,
this uncertainty is no reason to wait. Historical data
reveals that climate change is occurring earlier and
more rapidly than expected<cite val="num7"></cite>, with increasing impact in
the human realm. As risk analysts from the New
England Complex Systems Institute write, "We have
only one planet... Even a risk with a very low probability
becomes unacceptable when it affects all of us - there
is no reversing mistakes of that magnitude."<cite val="num8"></cite>`,

								},



								{ summary: `Even by conservative IPCC standards, government commitments fail, further exacerbating this risk`, 
								
										crisis: `Despite their call for urgent, transformational response,
it's important to note that the IPCC reflect the
conservative end of climate science, collating studies
from around the world and producing consensus
assessments - meaning that there is a whole swathe of
research beyond and outside the scope of what the
IPCC is reporting on. In short, their dire prognosis
reflects a best-case scenario - and yet, governments
and business continue to act as if it were a worst-case
scenario<cite val="num9"></cite><cite val="num10"></cite>. This lack of leadership threatens us all.`,

								},
													
													
													
								{ summary: `The risks inherent in a worsening climate mandate urgent, transformative action`, 
								
										crisis: `As a result of human activity, our climate is
warming, producing volatile conditions that threaten the
climatic stability on which our collective prosperity has
built. Due to the non-linear nature of warming, our
ongoing emissions risk taking us to a point where the
climate 'tips' - producing ever-increasing volatility
irrespective of reduced emissions . This risk is
unacceptable. <span style="font-weight:bold">New Zealand needs to join the nations
that are leading climate change action.</span><cite val="num11"></cite>`,

								},



													
	
	
							];
	
	
	
	// Render all mission statements
	for (var i = 0; i < mission_statements.length; i ++){
	
		var HTML = getStatementTemplate(i, mission_statements[i].summary, mission_statements[i].crisis, directory);
		
		
		$("#mission_table").append(HTML);
		
		//$("#mission_statements").append(HTML);
		
		
		// Click event: display/hide crisis
		$("[statement='" + i + "']").click(function(){
		
	
			
	
			var statementNum = parseFloat($(this).attr("statement"));
			
			
			

			var crisisEle = $("#crisis_" + statementNum).find(".crisis");
			
			
			
			
			// Show
			if (crisisEle.is(":hidden")){
			
				// Display the full crisis description and colour the summary
				crisisEle.show(300);
				
				$("#statement_" + statementNum).find(".summary").addClass("summary_hover");
				$("#statement_" + statementNum).find(".summary").attr("title", "Collapse");
				$("#statement_" + statementNum).find(".downTriange").hide(0);
				$("#statement_" + statementNum).find(".upTriange").show(0);
				
			
			}
			
			// Hide
			else{
				crisisEle.hide(300);
				$("#statement_" + statementNum).find(".summary").removeClass("summary_hover");
				$("#statement_" + statementNum).find(".summary").attr("title", "Expand");
				$("#statement_" + statementNum).find(".downTriange").show(0);
				$("#statement_" + statementNum).find(".upTriange").hide(0);
			}
			
			
			
			
			
			
			
		
		});
	
	}
	
	
	
	
	// Render the references section
	var num = 1;
	for (var ref in references){
	
	
		var HTML = getReferencesTemplate(num, references[ref].desc, references[ref].link);
		$("#references").append(HTML);
	
	
		// Add links to the reference section from relevant text
		
		$("cite[val=" + ref + "]").html(`<a class="reference" href="#references"><sup> [` + num + `]</sup></a>`);
	
		num++;
	}
	
}





function getReferencesTemplate(num, desc, link){

	var breaker = desc == "" ? "" : " |"; 
	var link_html = link == null ? `` : (breaker + ` URL: <a target="_blank" href="` + link + `">` + link + `</a>`);
	
	return `
	
		<div class="ref"><span style="color:black">[` + num + `]</span> ` + desc + link_html + ` </div>
	
	`;

}



function getStatementTemplate(index, summary, crisis, directory = ""){


	return `
	

		
		<tr id="statement_` + index + `">
		
			<td style="vertical-align:middle"> 
				<img class="bulletpoint" src="` + directory + `src/Images/logo.svg"> 
			</td>
		
		
			<td style="text-align:left"> 

				<div title="Expand" class="summary" statement=` + index + `>` + summary + ` <span class="downTriange">&#9660;</span> <span style="display:none" class="upTriange">&#9650;</span> </div>
			</td>
			
			
			<td style="width:20px"> 

			</td>
			
			
		</tr>
		
		
		<tr id="crisis_` + index + `">
		
		
			<td style="padding-bottom: 50px;"> 
				
			</td>
		
			<td colspan=1 style="padding-bottom: 50px;"> 
				
				
					<div  style="display:none" class="crisis">
				
						` + crisis + `
					
					</div>
				
			</td>
		</tr>
	

	
	
	`;

}

	